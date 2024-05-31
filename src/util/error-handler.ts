type BinnaceError = {
  [key: number]: string;
};

// Defino los posibles errores que puedan devovler una solicitud
const binanceStatusErrorCodes: BinnaceError = {
  403: 'WAF Limit (Web Application Firewall) has been violated',
  409: 'Cancel replace order partially succeeds',
  429: 'Broke a request rate limit',
  418: 'IP has been auto-banned for continuing to send requests after receiving: "Broke a request rate limit"',
};

// Verificando si el error existe, y si no lanzo un error generico
export const errorHandler = (err?: any): string => {
  if (err?.code) {
    const existError = binanceStatusErrorCodes[err.code];
    return existError;
  } else {
    return 'Ocurrió un error inesperado.';
  }
};
