import { useState } from 'react';

const useGetPayload = (form) => {
  let body = {};
  const formData = new FormData(form);

  for (const elem of formData.entries()) {
    body[`${elem[0]}`] = elem[1];
  }

  return [body];
};

export { useGetPayload };
