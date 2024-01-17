const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);

  const id = random + fecha;
  return id;
};

export default generarId;
