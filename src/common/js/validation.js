export const phoneValidate = (phone) => {
  const reg = /^(13[0-9]|15[^4\D]|18[^14\D]|17[^9\D]|147)\d{8}$/
  return reg.test(phone)
}
