// Security headers for CSP
exports.onClientEntry = () => {
  // Only run in production
  if (process.env.NODE_ENV === 'production') {
    // Add basic security checks
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      console.warn('Site should be served over HTTPS in production');
    }
  }
}