/* zod 사용 */
import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty("이름을 입력하시옹")
    .min(2, "2글자 이상 입력해라 마"),
  email: z
    .string()
    .nonempty("email을 입력하시옹")
    .email("올바른 이메일을 입력해 주세요."), // email 검증 메서드에는, 정규식이 포함되어 있다.
  password: z
    .string()
    .nonempty("password를 입력하시옹")
    .min(8, "8글자 이상 입력해라 마"),
});
