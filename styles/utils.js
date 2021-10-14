/* GENERAR OPACIDAD DE COLORES */
export const addOpacityColors = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
