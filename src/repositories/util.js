function getResponseJSON(promise) {
  return promise.then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      return respostaDoServidor.json();
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
}

export default { getResponseJSON };
