export default function handler(req, res) {
  console.log("req: ", req);
  console.log("개꿀");
  return res.status(200).json("완료");
}
