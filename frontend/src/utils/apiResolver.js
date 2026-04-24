// Detectar automaticamente o IP/Host correto
const getAPIUrl = () => {
  // Se estiver em modo desenvolvimento
  if (import.meta.env.DEV) {
    const hostname = window.location.hostname;
    const port = 3001;
    
    // Se for localhost, usa localhost
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `http://localhost:${port}`;
    }
    
    // Se for IP remoto, usa o mesmo IP
    return `http://${hostname}:${port}`;
  }
  
  // Em produção, usa a variável de ambiente
  return import.meta.env.VITE_API_URL || 'http://192.168.100.247:3001';
};

export default getAPIUrl;
