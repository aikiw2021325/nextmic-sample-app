// import { db } from "@/lib/prisma";

export default async function readLoginUserInfo(
  user_id: number,
  login_day: string
) {
  //   const login_user_info = await db.user.findFirst({
  //     where: {
  //       user_id: user_id,
  //       login_day: login_day,
  //     },
  //     select: {
  //       user_id: true,
  //       company_name: true,
  //     },
  //   });
  const login_user_info = {
    user_id: "1362",
    company_name: "南日本情報処理センター",
  };
  return login_user_info;
}
