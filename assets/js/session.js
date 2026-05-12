
(function() {
  
  setInterval(async () => {
    try {
      const res = await fetch('/api/session-check', {
        method: 'GET',
        credentials: 'include'
      });
      
      if (res.status === 401 || res.status === 403) {
        
        window.location.href = '/index.html';
      }
    } catch (e) {
      console.error('Session check failed:', e);
    }
  }, 10000); 
})();
