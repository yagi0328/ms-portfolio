"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validatePhone(tel: string) {
  // 電話番号の形式チェック（ハイフン有無、携帯番号も対応）
  const pattern = /^(0[0-9]{1,4}-?[0-9]{1,4}-?[0-9]{3,4}|0[789]0-?[0-9]{4}-?[0-9]{4})$/;
  return pattern.test(tel.replace(/\s/g, "")); // スペースを除去してチェック
}

export async function createContactData(_prevState: any, formData: FormData) {
  const rawFormData = {
    fullname: formData.get("fullname") as string,
    email: formData.get("email") as string,
    tel: formData.get("tel") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormData.fullname) {
    return {
      status: "error",
      message: "名前を入力してください",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (rawFormData.tel && !validatePhone(rawFormData.tel)) {
    return {
      status: "error",
      message: "電話番号の形式が正しくありません",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "メッセージを入力してください",
    };
  }

  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "fullname",
            value: rawFormData.fullname,
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: rawFormData.email,
          },
          {
            objectTypeId: "0-1",
            name: "tel",
            value: rawFormData.tel,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: rawFormData.message,
          },
        ],
      }),
    }
  );

  try {
    await result.json();
  } catch (e) {
    console.log(e);
    return {
      status: "error",
      message: "お問い合わせに失敗しました",
    };
  }

  return { status: "success", message: "OK" };
}
