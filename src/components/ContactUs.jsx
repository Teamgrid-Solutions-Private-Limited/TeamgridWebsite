import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Fade,
  LinearProgress,
} from "@mui/material";
import { Email, Phone, Person, Message } from "@mui/icons-material";
import axios from "axios";
import backgroundImage from "../assets/backgroundImage.svg";
import shortLogo from "../assets/shortLogo.svg";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Grow from "@mui/material/Grow";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CONTACT_INFO = {
  address:
    "Stesalit Tower, GP Block, Sector V, Bidhannagar, West Bengal, 700091",
  email: "hello@teamgrid.com",
  phone: "+1 (555) 123-4567",
};

const TOPIC_OPTIONS = ["General Inquiry", "Partnership", "Support", "Other"];

const initialForm = {
  fullName: "",
  workEmail: "",
  phoneNumber: "",
  company: "",
  topics: [],
  message: "",
  attachments: [], // files with upload status
  attachmentLinks: [], // google docs links
};

function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [googleDocsModalOpen, setGoogleDocsModalOpen] = useState(false);
  const [googleDocsLink, setGoogleDocsLink] = useState("");
  const [uploading, setUploading] = useState(false);

  // Function to upload files
  const uploadFiles = async (files) => {
    setUploading(true);
    const uploadPromises = Array.from(files).map(async (file) => {
      const fileData = new FormData();
      fileData.append("file", file);

      try {
        // Simulate upload progress - replace with your actual upload endpoint
        const response = await axios.post(
          "http://localhost:5000/api/contact/upload",
          fileData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              // Update progress for this specific file
              setForm((prev) => ({
                ...prev,
                attachments: prev.attachments.map((attachment) =>
                  attachment.file === file
                    ? { ...attachment, progress: percentCompleted }
                    : attachment
                ),
              }));
            },
          }
        );

        return {
          file,
          uploadedUrl: response.data.url, // Assuming your API returns the uploaded file URL
          status: "completed",
          progress: 100,
        };
      } catch (error) {
        return {
          file,
          status: "error",
          progress: 0,
          error: error.message,
        };
      }
    });

    const results = await Promise.all(uploadPromises);

    // Update form with upload results
    setForm((prev) => ({
      ...prev,
      attachments: prev.attachments.map((attachment) => {
        const result = results.find((r) => r.file === attachment.file);
        return result ? { ...attachment, ...result } : attachment;
      }),
    }));

    setUploading(false);
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      // Add files to form with initial upload state
      const newAttachments = Array.from(files).map((file) => ({
        file,
        status: "uploading",
        progress: 0,
      }));

      setForm((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...newAttachments],
      }));

      // Start uploading files
      await uploadFiles(files);
    } else if (name === "topics") {
      const checked = e.target.checked;
      const topic = value;
      setForm((prev) => ({
        ...prev,
        topics: checked
          ? [...prev.topics, topic]
          : prev.topics.filter((t) => t !== topic),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData();

    // Add all fields except attachments and attachmentLinks
    Object.entries(form).forEach(([key, value]) => {
      if (key !== "attachments" && key !== "attachmentLinks") {
        if (key === "topics") {
          value.forEach((topic) => formData.append("topics", topic));
        } else {
          formData.append(key, value);
        }
      }
    });

    // Add successfully uploaded files (use uploadedUrl or file based on your backend)
    form.attachments.forEach((attachment) => {
      if (attachment.status === "completed") {
        if (attachment.uploadedUrl) {
          formData.append("attachmentUrls", attachment.uploadedUrl);
        } else {
          formData.append("attachments", attachment.file);
        }
      }
    });

    // Add links
    form.attachmentLinks.forEach((link) => {
      formData.append("attachmentLinks", link);
    });

    try {
      await axios.post("http://localhost:5000/api/contact/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.errors?.[0]?.msg ||
          "Submission failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Check if any files are still uploading or if there are failed uploads
  const hasUploadingFiles = form.attachments.some(
    (att) => att.status === "uploading"
  );
  const hasFailedUploads = form.attachments.some(
    (att) => att.status === "error"
  );
  const isSubmitDisabled = submitting || uploading || hasUploadingFiles;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 8, lg: 12 },
        background: `linear-gradient(135deg, #05408E 0%, #0070FF 100%)`,
      }}
    >
      {/* Soft SVG background */}
      <Box
        component="img"
        src={backgroundImage}
        alt="Background abstract"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.5,
          filter: "blur(1px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Grow in timeout={700}>
        <Paper
          elevation={12}
          sx={{
            backdropFilter: "blur(18px)",
            backgroundColor: "rgba(255,255,255,0.18)",
            border: "1.5px solid rgba(255,255,255,0.25)",
            borderRadius: 6,
            maxWidth: "1248px",
            width: "100%",
            height: "100%",
            p: { xs: 3, md: 6 },
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 40px 0 rgba(5,64,142,0.18)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid
            container
            spacing={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* Left Info Section */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Vertical accent bar */}
                <Box
                  sx={{
                    position: "absolute",
                    left: -32,
                    top: 0,
                    bottom: 0,
                    width: 8,
                    borderRadius: 8,
                    background:
                      "linear-gradient(180deg, #05408E 0%, #0070FF 100%)",
                    display: { xs: "none", md: "block" },
                  }}
                />
                {/* Avatar/logo */}
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
                >
                  <Avatar
                    src={shortLogo}
                    alt="Teamgrid Logo"
                    sx={{
                      width: 84,
                      height: 84,
                      bgcolor: "#fff",
                      boxShadow: 2,
                      borderRadius: "16px",
                      p: 1,
                    }}
                    imgProps={{ style: { objectFit: "contain" } }}
                  />
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#fff",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Have a project in mind or want to learn more? Fill out the
                  form and our team will get back to you soon.
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#fff" }}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {CONTACT_INFO.address}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#fff" }}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {CONTACT_INFO.email}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#fff" }}
                    >
                      Phone
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {CONTACT_INFO.phone}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Right Form Section */}
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: 4,
                  boxShadow: "0 2px 16px 0 rgba(5,64,142,0.08)",
                  p: { xs: 2, md: 3 },
                  zIndex: 2,
                  height: "100%",
                }}
                aria-label="Contact form"
                encType="multipart/form-data"
              >
                {submitted ? (
                  <Fade in={submitted} timeout={500}>
                    <Box sx={{ textAlign: "center", py: 6 }}>
                      <Typography
                        variant="h5"
                        color="success.main"
                        gutterBottom
                      >
                        Thank you for contacting us!
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        We'll get back to you soon.
                      </Typography>
                    </Box>
                  </Fade>
                ) : (
                  <Fade in={!submitted} timeout={500} unmountOnExit>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 3,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <TextField
                        label="Full Name"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person />
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                        sx={{
                          input: { color: "#fff" },
                          "& label": { color: "#fff" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#fff" },
                            "&:hover fieldset": { borderColor: "#ccc" },
                          },
                        }}
                        aria-label="Full Name"
                      />

                      <TextField
                        label="Work Email"
                        name="workEmail"
                        type="email"
                        value={form.workEmail}
                        onChange={handleChange}
                        required
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                        sx={{
                          input: { color: "#fff" },
                          "& label": { color: "#fff" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#fff" },
                            "&:hover fieldset": { borderColor: "#ccc" },
                          },
                        }}
                        aria-label="Work Email"
                      />

                      <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone />
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                        sx={{
                          input: { color: "#fff" },
                          "& label": { color: "#fff" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#fff" },
                            "&:hover fieldset": { borderColor: "#ccc" },
                          },
                        }}
                        aria-label="Phone Number"
                      />

                      <TextField
                        label="Company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        sx={{
                          input: { color: "#fff" },
                          "& label": { color: "#fff" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#fff" },
                            "&:hover fieldset": { borderColor: "#ccc" },
                          },
                        }}
                        aria-label="Company"
                      />

                      <Box sx={{ width: "100%", color: "#fff" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, color: "#fff" }}
                        >
                          Topics
                        </Typography>
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          {TOPIC_OPTIONS.map((topic) => (
                            <label
                              key={topic}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <input
                                type="checkbox"
                                name="topics"
                                value={topic}
                                checked={form.topics.includes(topic)}
                                onChange={handleChange}
                                style={{ marginRight: 6 }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: "#fff" }}
                              >
                                {topic}
                              </Typography>
                            </label>
                          ))}
                        </Stack>
                      </Box>

                      <TextField
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        sx={{
                          textarea: { color: "#fff" },
                          "& label": { color: "#fff" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#fff" },
                            "&:hover fieldset": { borderColor: "#ccc" },
                          },
                        }}
                        aria-label="Message"
                      />

                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <AttachFileIcon sx={{ color: "#4CAF50" }} />
                        <Typography variant="body2" sx={{ color: "#fff" }}>
                          Select Files From Your{" "}
                          <Box
                            component="span"
                            sx={{
                              color: "#4CAF50",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              document
                                .getElementById("file-upload-input")
                                .click()
                            }
                          >
                            Computer
                          </Box>{" "}
                          or{" "}
                          <Box
                            component="span"
                            sx={{
                              color: "#4CAF50",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                            onClick={() => setGoogleDocsModalOpen(true)}
                          >
                            Google Docs
                          </Box>
                        </Typography>
                        <input
                          id="file-upload-input"
                          type="file"
                          name="attachments"
                          multiple
                          hidden
                          onChange={handleChange}
                        />
                      </Box>

                      {/* Display uploaded files with progress */}
                      {(form.attachments.length > 0 ||
                        form.attachmentLinks.length > 0) && (
                        <Box sx={{ mt: 2, width: "100%" }}>
                          {form.attachments.map((attachment, idx) => (
                            <Box
                              key={"file-" + idx}
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                mb: 2,
                                bgcolor:
                                  attachment.status === "error"
                                    ? "rgba(244, 67, 54, 0.1)"
                                    : "rgba(255,255,255,0.1)",
                                borderRadius: 2,
                                p: 2,
                                border: `1px solid ${
                                  attachment.status === "error"
                                    ? "#f44336"
                                    : "rgba(255,255,255,0.2)"
                                }`,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: 1,
                                }}
                              >
                                <AttachFileIcon
                                  sx={{ fontSize: 18, mr: 1, color: "#4CAF50" }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#fff",
                                    flexGrow: 1,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                  title={attachment.file.name}
                                >
                                  {attachment.file.name}
                                </Typography>
                                <IconButton
                                  size="small"
                                  aria-label="Remove file"
                                  onClick={() => {
                                    setForm((prev) => ({
                                      ...prev,
                                      attachments: prev.attachments.filter(
                                        (_, i) => i !== idx
                                      ),
                                    }));
                                  }}
                                  sx={{ ml: 1, color: "#d32f2f" }}
                                >
                                  <CloseIcon fontSize="small" />
                                </IconButton>
                              </Box>

                              {attachment.status === "uploading" && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  <LinearProgress
                                    variant="determinate"
                                    value={attachment.progress}
                                    sx={{
                                      flexGrow: 1,
                                      height: 6,
                                      borderRadius: 3,
                                      backgroundColor: "rgba(255,255,255,0.2)",
                                      "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#4CAF50",
                                      },
                                    }}
                                  />
                                  <Typography
                                    variant="caption"
                                    sx={{ color: "#fff", minWidth: 40 }}
                                  >
                                    {attachment.progress}%
                                  </Typography>
                                </Box>
                              )}

                              {attachment.status === "completed" && (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "#4CAF50" }}
                                >
                                  ✓ Upload completed
                                </Typography>
                              )}

                              {attachment.status === "error" && (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "#f44336" }}
                                >
                                  ✗ Upload failed: {attachment.error}
                                </Typography>
                              )}
                            </Box>
                          ))}

                          {form.attachmentLinks.map((url, idx) => (
                            <Box
                              key={"link-" + idx}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 0.5,
                                color: "#1976d2",
                                fontSize: 15,
                                bgcolor: "#F4F9FF",
                                borderRadius: 1,
                                px: 1.5,
                                py: 0.5,
                                maxWidth: 350,
                                overflow: "hidden",
                              }}
                            >
                              <AttachFileIcon
                                sx={{ fontSize: 18, mr: 1, color: "#1976d2" }}
                              />
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#1976d2",
                                  textDecoration: "underline",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  maxWidth: 250,
                                  display: "inline-block",
                                }}
                                title={url}
                              >
                                {url}
                              </a>
                              <IconButton
                                size="small"
                                aria-label="Remove link"
                                onClick={() => {
                                  setForm((prev) => ({
                                    ...prev,
                                    attachmentLinks:
                                      prev.attachmentLinks.filter(
                                        (_, i) => i !== idx
                                      ),
                                  }));
                                }}
                                sx={{ ml: 1, color: "#d32f2f" }}
                              >
                                <CloseIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          ))}
                        </Box>
                      )}

                      {error && (
                        <Typography variant="body2" color="error">
                          {error}
                        </Typography>
                      )}

                      {hasFailedUploads && (
                        <Typography variant="body2" sx={{ color: "#f44336" }}>
                          Some files failed to upload. Please remove them or try
                          again.
                        </Typography>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={isSubmitDisabled}
                        fullWidth
                        sx={{
                          borderRadius: "41px",
                          textTransform: "none",
                          fontWeight: 600,
                          boxShadow: isSubmitDisabled ? 4 : 2,
                          transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
                          opacity: isSubmitDisabled ? 0.7 : 1,
                        }}
                        aria-label="Send message"
                      >
                        {submitting ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : uploading || hasUploadingFiles ? (
                          <>
                            <CircularProgress
                              size={20}
                              color="inherit"
                              sx={{ mr: 1 }}
                            />
                            Uploading Files...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </Box>
                  </Fade>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grow>

      <Dialog
        open={googleDocsModalOpen}
        onClose={() => setGoogleDocsModalOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 2,
            background: "#fff",
            minWidth: { xs: "90vw", sm: 400 },
            boxShadow: "0 8px 32px 0 rgba(5,64,142,0.18)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            fontSize: 20,
            color: "#05408E",
            pb: 1,
            pr: 4,
          }}
        >
          Paste Google Docs/Drive File Link
          <IconButton
            aria-label="close"
            onClick={() => setGoogleDocsModalOpen(false)}
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              color: "#05408E",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <TextField
            autoFocus
            margin="dense"
            label="Google Docs/Drive Link"
            type="url"
            fullWidth
            variant="outlined"
            value={googleDocsLink}
            onChange={(e) => setGoogleDocsLink(e.target.value)}
            sx={{
              mt: 2,
              mb: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
              "& label": { color: "#05408E" },
            }}
            InputProps={{
              style: { fontSize: 16, color: "#05408E" },
            }}
          />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "flex-end",
            pb: 2,
            pt: 1,
            gap: 2,
          }}
        >
          <Button
            onClick={() => {
              setForm((prev) => ({
                ...prev,
                attachmentLinks: [...prev.attachmentLinks, googleDocsLink],
              }));
              setGoogleDocsModalOpen(false);
              setGoogleDocsLink("");
            }}
            disabled={!googleDocsLink}
            variant="contained"
            sx={{
              borderRadius: 2,
              background: "#05408E",
              color: "#fff",
              fontWeight: 600,
              px: 3,
              "&:hover": { background: "#0070FF" },
            }}
          >
            Add Link
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ContactUs;
