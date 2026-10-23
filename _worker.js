const گشا = (کد) =>
  new globalThis.TextDecoder().decode(globalThis.Uint8Array.from(globalThis.atob(کد), (نویسه) => نویسه.charCodeAt(0)));
const نماینده_2 = globalThis[گشا("UHJveHk=")];
const Version = "2026-09-22 20:01:17";
let config_JSON,
  انبار_فهرست_سفید_میانجی = null,
  گزارش_اشکال_زدایی_چاپ = false;
let فهرست_سفید_میانجی = [
  "*tapecontent.net",
  "*cloudatacdn.com",
  "*loadshare.org",
  "*cdn-centaurus.com",
  "scholar.google.com",
];
const Pages_ایستا_صفحه = "https://edt-pages.github.io";
// ===== ثابت‌های سراسری و توابع کمکی =====
const وب_سوکت_زودهنگام_داده_حداکثر_بایت = 8 * 1024,
  وب_سوکت_زودهنگام_داده_حداکثر_سرآیند_طول = Math.ceil((وب_سوکت_زودهنگام_داده_حداکثر_بایت * 4) / 3) + 4;
const بالارو_بسته_بندی_هدف_بایت = 20 * 1024,
  بالارو_صف_حداکثر_بایت = 16 * 1024 * 1024,
  بالارو_صف_حداکثر_آیتم = 4096;
const پایین_رو_دانه_بسته_بایت = 32 * 1024,
  پایین_رو_دانه_دم_حدآستانه = 512,
  پایین_رو_دانه_سطح_پایین_بایت = Math.max(4096, پایین_رو_دانه_دم_حدآستانه * 12),
  پایین_رو_دانه_حداکثر_انتظار_دور = 4;
let تی_سی_پی_همزمان_شماره_گیری_داده = 2,
  میانجی_برگشتی_همزمان_شماره_گیری_داده = 1,
  پیش_بارگذاری_مسابقه_شماره_گیری = false;
// ===== شناسه‌های تشخیص =====
const کد_شناسه_فرهنگ = [
  (نماینده_2.name + "IP").toUpperCase(),
  (String.fromCharCode(67, 109) + URL.name[2] + "i" + URL.name[0]).toLowerCase(),
  String(2407 * 300 - 10)
    .split("")
    .reverse()
    .join(""),
];
const تجمیع_اشتراک_UA =
  گشا("djJyYXlOL2VkZ2U=") +
  گشا("dHVubmVsIChodHRwczovL2dpdGh1Yi5jb20v") +
  کد_شناسه_فرهنگ[1] +
  "/edge" +
  گشا("dHVubmVsKQ==");
// ===== بخش اصلی =====
export default {
  async fetch(request, env, ctx) {
    let درخواست_نشانی_متن = request.url.replace(/%5[Cc]/g, "").replace(/\\/g, "");
    const درخواست_نشانی_لنگر_نمایه = درخواست_نشانی_متن.indexOf("#");
    const درخواست_نشانی_بدنه_بخش =
      درخواست_نشانی_لنگر_نمایه === -1 ? درخواست_نشانی_متن : درخواست_نشانی_متن.slice(0, درخواست_نشانی_لنگر_نمایه);
    if (!درخواست_نشانی_بدنه_بخش.includes("?") && /%3f/i.test(درخواست_نشانی_بدنه_بخش)) {
      const درخواست_نشانی_لنگر_بخش =
        درخواست_نشانی_لنگر_نمایه === -1 ? "" : درخواست_نشانی_متن.slice(درخواست_نشانی_لنگر_نمایه);
      درخواست_نشانی_متن = درخواست_نشانی_بدنه_بخش.replace(/%3f/i, "?") + درخواست_نشانی_لنگر_بخش;
    }
    const url = new URL(درخواست_نشانی_متن);
    const UA = request.headers.get("User-Agent") || "null";
    const upgradeHeader = (request.headers.get("Upgrade") || "").toLowerCase(),
      contentType = (request.headers.get("content-type") || "").toLowerCase();
    const مدیر_گذرواژه =
      env.ADMIN ||
      env.admin ||
      env.PASSWORD ||
      env.password ||
      env.pswd ||
      env.TOKEN ||
      env.KEY ||
      env.UUID ||
      env.uuid;
    const رمزنگاری_کلید_مخفی =
      env.KEY ||
      گشا("5Yu/5Yqo5q2k6buY6K6k5a+G6ZKl77yM5pyJ6ZyA5rGC6K+36Ieq6KGM6YCa6L+H5re75Yqg5Y+Y6YePS0VZ6L+b6KGM5L+u5pS5");
    const userIDMD5 = await MD5MD5(مدیر_گذرواژه + رمزنگاری_کلید_مخفی);
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    const envUUID = env.UUID || env.uuid;
    const userID =
      envUUID && uuidRegex.test(envUUID)
        ? envUUID.toLowerCase()
        : [
            userIDMD5.slice(0, 8),
            userIDMD5.slice(8, 12),
            "4" + userIDMD5.slice(13, 16),
            "8" + userIDMD5.slice(17, 20),
            userIDMD5.slice(20),
          ].join("-");
    const hosts = env.HOST
      ? (await تبدیل_به_آرایه(env.HOST)).map(
          (h) =>
            h
              .toLowerCase()
              .replace(/^https?:\/\//, "")
              .split("/")[0]
              .split(":")[0],
        )
      : [url.hostname];
    const host = hosts[0];
    const مسیر_دسترسی = url.pathname.slice(1).toLowerCase();
    گزارش_اشکال_زدایی_چاپ = ["1", "true"].includes(env.DEBUG) || گزارش_اشکال_زدایی_چاپ;
    پیش_بارگذاری_مسابقه_شماره_گیری = ["1", "true"].includes(env.PRELOAD_RACE_DIAL) || پیش_بارگذاری_مسابقه_شماره_گیری;
    میانجی_برگشتی_همزمان_شماره_گیری_داده = Math.max(
      1,
      Number(env[گشا("UFJPWFlfQ09OQ1VSUkVOVF9ESUFM")]) || میانجی_برگشتی_همزمان_شماره_گیری_داده,
    );
    تی_سی_پی_همزمان_شماره_گیری_داده = Math.max(1, Number(env.TCP_CONCURRENT_DIAL) || تی_سی_پی_همزمان_شماره_گیری_داده);
    if (!env.TCP_CONCURRENT_DIAL && تی_سی_پی_همزمان_شماره_گیری_داده !== 1 && شناسایی_اپراتور(request) === "cmcc")
      تی_سی_پی_همزمان_شماره_گیری_داده = 1;
    let پیش_فرض_میانجی_برگشتی_آی_پی =
        `${request.cf.colo}.${کد_شناسه_فرهنگ[0]}.${کد_شناسه_فرهنگ[1]}SsSs.nEt`.toLowerCase(),
      پیش_فرض_میانجی_برگشتی_پشتیبان = true;
    if (env[گشا("UFJPWFlJUA==")]) {
      const آیپی_های_میانجی = await تبدیل_به_آرایه(env[گشا("UFJPWFlJUA==")]);
      پیش_فرض_میانجی_برگشتی_آی_پی = آیپی_های_میانجی[Math.floor(Math.random() * آیپی_های_میانجی.length)];
      پیش_فرض_میانجی_برگشتی_پشتیبان = false;
    }
    const دسترسی_آی_پی =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("True-Client-IP") ||
      request.headers.get("X-Real-IP") ||
      request.headers.get("X-Forwarded-For") ||
      request.headers.get("Fly-Client-IP") ||
      request.headers.get("X-Appengine-Remote-Addr") ||
      request.headers.get("X-Cluster-Client-IP") ||
      گشا("5pyq55+lSVA=");
    if (انبار_فهرست_سفید_میانجی === null) {
      if (env[گشا("R08yU09DS1M1")])
        فهرست_سفید_میانجی = [...new Set(فهرست_سفید_میانجی.concat(await تبدیل_به_آرایه(env[گشا("R08yU09DS1M1")])))];
      انبار_فهرست_سفید_میانجی = فهرست_سفید_میانجی;
    } else فهرست_سفید_میانجی = انبار_فهرست_سفید_میانجی;
    if (مسیر_دسترسی === "version") {
      //
      const درخواست_شناسه = (url.searchParams.get("uuid") || "").toLowerCase();
      if (uuidRegex.test(درخواست_شناسه)) {
        const هدف_شناسه = String(userID).toLowerCase();
        let درخواست_قبل_8_مجموع = 0,
          هدف_قبل_8_مجموع = 0;
        for (let i = 0; i < 8; i++) {
          const درخواست_کد = درخواست_شناسه.charCodeAt(i);
          درخواست_قبل_8_مجموع += درخواست_کد <= 57 ? درخواست_کد - 48 : درخواست_کد - 87;
          const هدف_کد = هدف_شناسه.charCodeAt(i);
          هدف_قبل_8_مجموع += هدف_کد <= 57 ? هدف_کد - 48 : هدف_کد - 87;
        }
        if (درخواست_قبل_8_مجموع === هدف_قبل_8_مجموع && درخواست_شناسه.slice(-12) === هدف_شناسه.slice(-12))
          return new Response(JSON.stringify({ Version: Number(String(Version).replace(/\D+/g, "")) }), {
            status: 200,
            headers: { "Content-Type": "application/json;charset=utf-8" },
          });
      }
    } else if (مدیر_گذرواژه && upgradeHeader === "websocket") {
      //
      const میانجی_برگشتی_بستر = await میانجی_برگشتی_پارامتر_گرفتن(
        url,
        userID,
        پیش_فرض_میانجی_برگشتی_آی_پی,
        پیش_فرض_میانجی_برگشتی_پشتیبان,
      );
      log(`${گشا("W1dlYlNvY2tldF0g5ZG95Lit6K+35rGCOiA=")}${url.pathname}${url.search}`);
      return await پردازش_وب_سوکت_درخواست(request, userID, url, میانجی_برگشتی_بستر);
    } else if (
      مدیر_گذرواژه &&
      !مسیر_دسترسی.startsWith("admin/") &&
      مسیر_دسترسی !== "login" &&
      request.method === "POST"
    ) {
      //
      const میانجی_برگشتی_بستر = await میانجی_برگشتی_پارامتر_گرفتن(
        url,
        userID,
        پیش_فرض_میانجی_برگشتی_آی_پی,
        پیش_فرض_میانجی_برگشتی_پشتیبان,
      );
      const { [گشا("5aS0")]: این_دستگاه_پوشش_سرآیند, [گشا("6ZSu")]: این_دستگاه_پوشش_کلید } =
        گرفتن_ضربدری_اچ_تی_تی_پی_پوشش_نشانه(userID);
      const تطبیق_ضربدری_اچ_تی_تی_پی_ویژگی =
        !!request.headers.get(این_دستگاه_پوشش_سرآیند) || !!url.searchParams.get(این_دستگاه_پوشش_کلید);
      if (!تطبیق_ضربدری_اچ_تی_تی_پی_ویژگی && contentType.startsWith("application/grpc")) {
        log(`${گشا("W2dSUENdIOWRveS4reivt+axgjog")}${url.pathname}${url.search}`);
        return await پردازش_جی_آر_پی_سی_درخواست(request, userID, میانجی_برگشتی_بستر);
      }
      log(`${گشا("W+WPiUhUVFBdIOWRveS4reivt+axgjog")}${url.pathname}${url.search}`);
      return await پردازش_ضربدری_اچ_تی_تی_پی_درخواست(request, userID, میانجی_برگشتی_بستر);
    } else {
      if (url.protocol === "http:")
        return Response.redirect(url.href.replace(`http://${url.hostname}`, `https://${url.hostname}`), 301);
      if (!مدیر_گذرواژه)
        return fetch(Pages_ایستا_صفحه + "/noADMIN").then((r) => {
          const headers = new Headers(r.headers);
          headers.set("Cache-Control", گشا("bm8tc3RvcmUsIG5vLWNhY2hlLCBtdXN0LXJldmFsaWRhdGUsIHByb3h5LXJldmFsaWRhdGU="));
          headers.set("Pragma", "no-cache");
          headers.set("Expires", "0");
          return new Response(r.body, { status: 404, statusText: r.statusText, headers });
        });
      if (env.KV && typeof env.KV.get === "function") {
        const حساس_به_حروف_بزرگ_و_کوچک_مسیر_دسترسی = url.pathname.slice(1);
        if (
          حساس_به_حروف_بزرگ_و_کوچک_مسیر_دسترسی === رمزنگاری_کلید_مخفی &&
          رمزنگاری_کلید_مخفی !==
            گشا("5Yu/5Yqo5q2k6buY6K6k5a+G6ZKl77yM5pyJ6ZyA5rGC6K+36Ieq6KGM6YCa6L+H5re75Yqg5Y+Y6YePS0VZ6L+b6KGM5L+u5pS5")
        ) {
          //
          const params = new URLSearchParams(url.search);
          params.set("token", await MD5MD5(host + userID));
          return new Response(گشا("6YeN5a6a5ZCR5LitLi4u"), {
            status: 302,
            headers: { Location: `/sub?${params.toString()}` },
          });
        } else if (مسیر_دسترسی === "login") {
          //
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies
            .split(";")
            .find((c) => c.trim().startsWith("auth="))
            ?.split("=")[1];
          if (authCookie == (await MD5MD5(UA + رمزنگاری_کلید_مخفی + مدیر_گذرواژه)))
            return new Response(گشا("6YeN5a6a5ZCR5LitLi4u"), { status: 302, headers: { Location: "/admin" } });
          if (request.method === "POST") {
            const formData = await request.text();
            const params = new URLSearchParams(formData);
            const ورودی_گذرواژه = params.get("password");
            if (
              ورودی_گذرواژه === (typeof مدیر_گذرواژه === "string" ? مدیر_گذرواژه.replace(/[\r\n]/g, "") : مدیر_گذرواژه)
            ) {
              //
              const پاسخ = new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { "Content-Type": "application/json;charset=utf-8" },
              });
              پاسخ.headers.set(
                "Set-Cookie",
                `auth=${await MD5MD5(UA + رمزنگاری_کلید_مخفی + مدیر_گذرواژه)}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`,
              );
              return پاسخ;
            }
          }
          return fetch(Pages_ایستا_صفحه + "/login");
        } else if (مسیر_دسترسی === "admin" || مسیر_دسترسی.startsWith("admin/")) {
          //
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies
            .split(";")
            .find((c) => c.trim().startsWith("auth="))
            ?.split("=")[1];
          //
          if (!authCookie || authCookie !== (await MD5MD5(UA + رمزنگاری_کلید_مخفی + مدیر_گذرواژه)))
            return new Response(گشا("6YeN5a6a5ZCR5LitLi4u"), { status: 302, headers: { Location: "/login" } });
          if (مسیر_دسترسی === "admin/log.json") {
            //
            const خواندن_گزارش_محتوا = (await env.KV.get("log.json")) || "[]";
            return new Response(خواندن_گزارش_محتوا, {
              status: 200,
              headers: { "Content-Type": "application/json;charset=utf-8" },
            });
          } else if (حساس_به_حروف_بزرگ_و_کوچک_مسیر_دسترسی === "admin/getCloudflareUsage") {
            //
            try {
              const Usage_JSON = await getCloudflareUsage(
                url.searchParams.get("Email"),
                url.searchParams.get("GlobalAPIKey"),
                url.searchParams.get("AccountID"),
                url.searchParams.get("APIToken"),
              );
              return new Response(JSON.stringify(Usage_JSON, null, 2), {
                status: 200,
                headers: { "Content-Type": "application/json" },
              });
            } catch (err) {
              const errorResponse = {
                msg: گشا("5p+l6K+i6K+35rGC6YeP5aSx6LSl77yM5aSx6LSl5Y6f5Zug77ya") + err.message,
                error: err.message,
              };
              return new Response(JSON.stringify(errorResponse, null, 2), {
                status: 500,
                headers: { "Content-Type": "application/json;charset=utf-8" },
              });
            }
          } else if (حساس_به_حروف_بزرگ_و_کوچک_مسیر_دسترسی === "admin/getADDAPI") {
            //
            if (url.searchParams.get("url")) {
              const درانتظار_اعتبارسنجی_برگزیده_نشانی = url.searchParams.get("url");
              try {
                new URL(درانتظار_اعتبارسنجی_برگزیده_نشانی);
                const درخواست_برگزیده_ای_پی_آی_محتوا = await درخواست_برگزیده_ای_پی_آی(
                  [درانتظار_اعتبارسنجی_برگزیده_نشانی],
                  url.searchParams.get("port") || "443",
                );
                let برگزیده_ای_پی_آی_آی_پی =
                  درخواست_برگزیده_ای_پی_آی_محتوا[0].length > 0
                    ? درخواست_برگزیده_ای_پی_آی_محتوا[0]
                    : درخواست_برگزیده_ای_پی_آی_محتوا[1];
                برگزیده_ای_پی_آی_آی_پی = برگزیده_ای_پی_آی_آی_پی.map((item) =>
                  item.replace(/#(.+)$/, (_, remark) => "#" + decodeURIComponent(remark)),
                );
                return new Response(JSON.stringify({ success: true, data: برگزیده_ای_پی_آی_آی_پی }, null, 2), {
                  status: 200,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              } catch (err) {
                const errorResponse = {
                  msg: گشا("6aqM6K+B5LyY6YCJQVBJ5aSx6LSl77yM5aSx6LSl5Y6f5Zug77ya") + err.message,
                  error: err.message,
                };
                return new Response(JSON.stringify(errorResponse, null, 2), {
                  status: 500,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              }
            }
            return new Response(JSON.stringify({ success: false, data: [] }, null, 2), {
              status: 403,
              headers: { "Content-Type": "application/json;charset=utf-8" },
            });
          } else if (مسیر_دسترسی === "admin/check") {
            //
            const میانجی_پروتکل =
              [گشا("c29ja3M1"), "http", "https", گشا("dHVybg=="), گشا("c3N0cA==")].find((نوع) =>
                url.searchParams.has(نوع),
              ) || null;
            if (!میانجی_پروتکل)
              return new Response(JSON.stringify({ error: گشا("57y65bCR5Luj55CG5Y+C5pWw") }), {
                status: 400,
                headers: { "Content-Type": "application/json;charset=utf-8" },
              });
            const میانجی_پارامتر = url.searchParams.get(میانجی_پروتکل);
            const startTime = Date.now();
            let بررسی_میانجی_پاسخ;
            try {
              const checkParsed = await گرفتن_حساب_میانجی(میانجی_پارامتر, گرفتن_میانجی_پیش_فرض_درگاه(میانجی_پروتکل));
              const { username, password, hostname, port } = checkParsed;
              const کامل_میانجی_پارامتر =
                username && password ? `${username}:${password}@${hostname}:${port}` : `${hostname}:${port}`;
              try {
                const بررسی_میزبان = "cloudflare.com",
                  بررسی_درگاه = 443,
                  encoder = new TextEncoder(),
                  decoder = new TextDecoder();
                const تی_سی_پی_اتصال = ایجاد_درخواست_تی_سی_پی_اتصال_دهنده(request);
                let tcpSocket = null,
                  tlsSocket = null;
                try {
                  tcpSocket =
                    میانجی_پروتکل === گشا("c29ja3M1")
                      ? await اتصال_میانجی(بررسی_میزبان, بررسی_درگاه, new Uint8Array(0), تی_سی_پی_اتصال, checkParsed)
                      : میانجی_پروتکل === گشا("dHVybg==")
                        ? await اتصال_گردش(checkParsed, بررسی_میزبان, بررسی_درگاه, تی_سی_پی_اتصال)
                        : میانجی_پروتکل === گشا("c3N0cA==")
                          ? await اتصال_مجرای_امن(checkParsed, بررسی_میزبان, بررسی_درگاه, تی_سی_پی_اتصال)
                          : میانجی_پروتکل === "https" && isIPHostname(hostname)
                            ? await httpsConnect(
                                بررسی_میزبان,
                                بررسی_درگاه,
                                new Uint8Array(0),
                                تی_سی_پی_اتصال,
                                checkParsed,
                              )
                            : await httpConnect(
                                بررسی_میزبان,
                                بررسی_درگاه,
                                new Uint8Array(0),
                                میانجی_پروتکل === "https",
                                تی_سی_پی_اتصال,
                                checkParsed,
                              );
                  if (!tcpSocket) throw new Error(گشا("5peg5rOV6L+e5o6l5Yiw5Luj55CG5pyN5Yqh5Zmo"));
                  tlsSocket = new TlsClient(tcpSocket, { serverName: بررسی_میزبان, insecure: true });
                  await tlsSocket.handshake();
                  await tlsSocket.write(
                    encoder.encode(
                      `GET /cdn-cgi/trace HTTP/1.1\r\nHost: ${بررسی_میزبان}\r\nUser-Agent: Mozilla/5.0\r\nConnection: close\r\n\r\n`,
                    ),
                  );
                  let responseBuffer = new Uint8Array(0),
                    headerEndIndex = -1,
                    contentLength = null,
                    chunked = false;
                  const حداکثر_پاسخ_بایت = 64 * 1024;
                  while (responseBuffer.length < حداکثر_پاسخ_بایت) {
                    const value = await tlsSocket.read();
                    if (!value) break;
                    if (value.byteLength === 0) continue;
                    responseBuffer = پیوند_بایت_داده(responseBuffer, value);
                    if (headerEndIndex === -1) {
                      const crlfcrlf = responseBuffer.findIndex(
                        (_, i) =>
                          i < responseBuffer.length - 3 &&
                          responseBuffer[i] === 0x0d &&
                          responseBuffer[i + 1] === 0x0a &&
                          responseBuffer[i + 2] === 0x0d &&
                          responseBuffer[i + 3] === 0x0a,
                      );
                      if (crlfcrlf !== -1) {
                        headerEndIndex = crlfcrlf + 4;
                        const headers = decoder.decode(responseBuffer.slice(0, headerEndIndex));
                        const statusLine = headers.split("\r\n")[0] || "";
                        const statusMatch = statusLine.match(/HTTP\/\d\.\d\s+(\d+)/);
                        const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
                        if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300)
                          throw new Error(
                            `${گشا("5Luj55CG5qOA5rWL6K+35rGC5aSx6LSlOiA=")}${statusLine || گشا("5peg5pWI5ZON5bqU")}`,
                          );
                        const lengthMatch = headers.match(/\r\nContent-Length:\s*(\d+)/i);
                        if (lengthMatch) contentLength = parseInt(lengthMatch[1], 10);
                        chunked = /\r\nTransfer-Encoding:\s*chunked/i.test(headers);
                      }
                    }
                    if (
                      headerEndIndex !== -1 &&
                      contentLength !== null &&
                      responseBuffer.length >= headerEndIndex + contentLength
                    )
                      break;
                    if (headerEndIndex !== -1 && chunked && decoder.decode(responseBuffer).includes("\r\n0\r\n\r\n"))
                      break;
                  }
                  if (headerEndIndex === -1) throw new Error(گشا("5Luj55CG5qOA5rWL5ZON5bqU5aS06L+H6ZW/5oiW5peg5pWI"));
                  const response = decoder.decode(responseBuffer);
                  const ip = response.match(/(?:^|\n)ip=(.*)/)?.[1];
                  const loc = response.match(/(?:^|\n)loc=(.*)/)?.[1];
                  if (!ip || !loc) throw new Error(گشا("5Luj55CG5qOA5rWL5ZON5bqU5peg5pWI"));
                  بررسی_میانجی_پاسخ = {
                    success: true,
                    [گشا("cHJveHk=")]: میانجی_پروتکل + "://" + کامل_میانجی_پارامتر,
                    ip,
                    loc,
                    responseTime: Date.now() - startTime,
                  };
                } finally {
                  try {
                    tlsSocket ? tlsSocket.close() : await tcpSocket?.close?.();
                  } catch (e) {}
                }
              } catch (error) {
                بررسی_میانجی_پاسخ = {
                  success: false,
                  error: error.message,
                  [گشا("cHJveHk=")]: میانجی_پروتکل + "://" + کامل_میانجی_پارامتر,
                  responseTime: Date.now() - startTime,
                };
              }
            } catch (err) {
              بررسی_میانجی_پاسخ = {
                success: false,
                error: err.message,
                [گشا("cHJveHk=")]: میانجی_پروتکل + "://" + میانجی_پارامتر,
                responseTime: Date.now() - startTime,
              };
            }
            return new Response(JSON.stringify(بررسی_میانجی_پاسخ, null, 2), {
              status: 200,
              headers: { "Content-Type": "application/json;charset=utf-8" },
            });
          }

          config_JSON = await خواندن_config_JSON(env, host, userID, UA);

          if (مسیر_دسترسی === "admin/init") {
            //
            try {
              config_JSON = await خواندن_config_JSON(env, host, userID, UA, true);
              ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Init_Config", config_JSON));
              config_JSON.init = گشا("6YWN572u5bey6YeN572u5Li66buY6K6k5YC8");
              return new Response(JSON.stringify(config_JSON, null, 2), {
                status: 200,
                headers: { "Content-Type": "application/json;charset=utf-8" },
              });
            } catch (err) {
              const errorResponse = {
                msg: گشا("6YWN572u6YeN572u5aSx6LSl77yM5aSx6LSl5Y6f5Zug77ya") + err.message,
                error: err.message,
              };
              return new Response(JSON.stringify(errorResponse, null, 2), {
                status: 500,
                headers: { "Content-Type": "application/json;charset=utf-8" },
              });
            }
          } else if (request.method === "POST") {
            //
            if (مسیر_دسترسی === "admin/config.json") {
              //
              try {
                const newConfig = await request.json();
                //
                if (!newConfig.UUID || !newConfig.HOST)
                  return new Response(JSON.stringify({ error: گشا("6YWN572u5LiN5a6M5pW0") }), {
                    status: 400,
                    headers: { "Content-Type": "application/json;charset=utf-8" },
                  });

                //
                await env.KV.put("config.json", JSON.stringify(newConfig, null, 2));
                ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: گشا("6YWN572u5bey5L+d5a2Y") }), {
                  status: 200,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              } catch (error) {
                console.error(گشا("5L+d5a2Y6YWN572u5aSx6LSlOg=="), error);
                return new Response(JSON.stringify({ error: گشا("5L+d5a2Y6YWN572u5aSx6LSlOiA=") + error.message }), {
                  status: 500,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              }
            } else if (مسیر_دسترسی === "admin/cf.json") {
              //
              try {
                const newConfig = await request.json();
                const CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
                if (!newConfig.init || newConfig.init !== true) {
                  if (newConfig.Email && newConfig.GlobalAPIKey) {
                    CF_JSON.Email = newConfig.Email;
                    CF_JSON.GlobalAPIKey = newConfig.GlobalAPIKey;
                  } else if (newConfig.AccountID && newConfig.APIToken) {
                    CF_JSON.AccountID = newConfig.AccountID;
                    CF_JSON.APIToken = newConfig.APIToken;
                  } else if (newConfig.UsageAPI) {
                    CF_JSON.UsageAPI = newConfig.UsageAPI;
                  } else {
                    return new Response(JSON.stringify({ error: گشا("6YWN572u5LiN5a6M5pW0") }), {
                      status: 400,
                      headers: { "Content-Type": "application/json;charset=utf-8" },
                    });
                  }
                }

                //
                await env.KV.put("cf.json", JSON.stringify(CF_JSON, null, 2));
                ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: گشا("6YWN572u5bey5L+d5a2Y") }), {
                  status: 200,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              } catch (error) {
                console.error(گشا("5L+d5a2Y6YWN572u5aSx6LSlOg=="), error);
                return new Response(JSON.stringify({ error: گشا("5L+d5a2Y6YWN572u5aSx6LSlOiA=") + error.message }), {
                  status: 500,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              }
            } else if (مسیر_دسترسی === "admin/tg.json") {
              //
              try {
                const newConfig = await request.json();
                if (newConfig.init && newConfig.init === true) {
                  const TG_JSON = { BotToken: null, ChatID: null };
                  await env.KV.put("tg.json", JSON.stringify(TG_JSON, null, 2));
                } else {
                  if (!newConfig.BotToken || !newConfig.ChatID)
                    return new Response(JSON.stringify({ error: گشا("6YWN572u5LiN5a6M5pW0") }), {
                      status: 400,
                      headers: { "Content-Type": "application/json;charset=utf-8" },
                    });
                  await env.KV.put("tg.json", JSON.stringify(newConfig, null, 2));
                }
                ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: گشا("6YWN572u5bey5L+d5a2Y") }), {
                  status: 200,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              } catch (error) {
                console.error(گشا("5L+d5a2Y6YWN572u5aSx6LSlOg=="), error);
                return new Response(JSON.stringify({ error: گشا("5L+d5a2Y6YWN572u5aSx6LSlOiA=") + error.message }), {
                  status: 500,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              }
            } else if (حساس_به_حروف_بزرگ_و_کوچک_مسیر_دسترسی === "admin/ADD.txt") {
              //
              try {
                const customIPs = await request.text();
                await env.KV.put("ADD.txt", customIPs); //
                ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Save_Custom_IPs", config_JSON));
                return new Response(JSON.stringify({ success: true, message: گشا("6Ieq5a6a5LmJSVDlt7Lkv53lrZg=") }), {
                  status: 200,
                  headers: { "Content-Type": "application/json;charset=utf-8" },
                });
              } catch (error) {
                console.error(گشا("5L+d5a2Y6Ieq5a6a5LmJSVDlpLHotKU6"), error);
                return new Response(
                  JSON.stringify({ error: گشا("5L+d5a2Y6Ieq5a6a5LmJSVDlpLHotKU6IA==") + error.message }),
                  { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } },
                );
              }
            } else
              return new Response(JSON.stringify({ error: گشا("5LiN5pSv5oyB55qEUE9TVOivt+axgui3r+W+hA==") }), {
                status: 404,
                headers: { "Content-Type": "application/json;charset=utf-8" },
              });
          } else if (مسیر_دسترسی === "admin/config.json") {
            //
            return new Response(JSON.stringify(config_JSON, null, 2), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          } else if (حساس_به_حروف_بزرگ_و_کوچک_مسیر_دسترسی === "admin/ADD.txt") {
            //
            let محلی_برگزیده_آی_پی = (await env.KV.get("ADD.txt")) || "null";
            if (محلی_برگزیده_آی_پی == "null")
              محلی_برگزیده_آی_پی = (
                await تولید_تصادفی_آی_پی(
                  request,
                  config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][گشا("6ZqP5py65pWw6YeP")],
                  config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][گشا("5oyH5a6a56uv5Y+j")],
                )
              )[1];
            return new Response(محلی_برگزیده_آی_پی, {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8", asn: request.cf.asn },
            });
          } else if (مسیر_دسترسی === "admin/cf.json") {
            //
            return new Response(JSON.stringify(request.cf, null, 2), {
              status: 200,
              headers: { "Content-Type": "application/json;charset=utf-8" },
            });
          }

          ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Admin_Login", config_JSON));
          return fetch(Pages_ایستا_صفحه + "/admin" + url.search);
        } else if (مسیر_دسترسی === "logout" || uuidRegex.test(مسیر_دسترسی)) {
          //
          const پاسخ = new Response(گشا("6YeN5a6a5ZCR5LitLi4u"), { status: 302, headers: { Location: "/login" } });
          پاسخ.headers.set("Set-Cookie", "auth=; Path=/; Max-Age=0; HttpOnly");
          return پاسخ;
        } else if (مسیر_دسترسی === "sub") {
          //
          const اشتراک_توکن = await MD5MD5(host + userID),
            به_عنوان_برگزیده_اشتراک_سازنده =
              ["1", "true"].includes(env.BEST_SUB) &&
              url.searchParams.get("host") === "example.com" &&
              url.searchParams.get("uuid") === "00000000-0000-4000-8000-000000000000" &&
              UA.toLowerCase().includes(گشا("dHVubmVsIChodHRwczovL2dpdGh1Yi5jb20v") + کد_شناسه_فرهنگ[1] + "/edge");
          const درخواست_توکن = url.searchParams.get("token");
          const کاربر_کارخواه_درخواست_اشتراک = درخواست_توکن === اشتراک_توکن;
          const جاری_شماره_روز = Math.floor(Date.now() / 86400000);
          const اشتراک_تبدیل_پشت_صحنه_توکن_بذر = base64SecretEncode(اشتراک_توکن, userID);
          const [امروز_اشتراک_تبدیل_پشت_صحنه_اختصاصی_توکن, دیروز_اشتراک_تبدیل_پشت_صحنه_اختصاصی_توکن] =
            await Promise.all([
              MD5MD5(اشتراک_تبدیل_پشت_صحنه_توکن_بذر + جاری_شماره_روز),
              MD5MD5(اشتراک_تبدیل_پشت_صحنه_توکن_بذر + (جاری_شماره_روز - 1)),
            ]);
          const اشتراک_تبدیل_پشت_صحنه_درخواست_اشتراک =
            درخواست_توکن === امروز_اشتراک_تبدیل_پشت_صحنه_اختصاصی_توکن ||
            درخواست_توکن === دیروز_اشتراک_تبدیل_پشت_صحنه_اختصاصی_توکن;
          if (کاربر_کارخواه_درخواست_اشتراک || اشتراک_تبدیل_پشت_صحنه_درخواست_اشتراک || به_عنوان_برگزیده_اشتراک_سازنده) {
            config_JSON = await خواندن_config_JSON(env, host, userID, UA);
            if (به_عنوان_برگزیده_اشتراک_سازنده)
              ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Get_Best_SUB", config_JSON, false));
            else ctx.waitUntil(درخواست_گزارش_رکورد(env, request, دسترسی_آی_پی, "Get_SUB", config_JSON));
            const ua = UA.toLowerCase();
            const responseHeaders = {
              "content-type": "text/plain; charset=utf-8",
              "Profile-Update-Interval": config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUBUpdateTime,
              "Profile-web-page-url": url.protocol + "//" + url.host + "/admin",
              "Cache-Control": "no-store",
            };
            if (config_JSON.CF.Usage.success) {
              const pagesSum = config_JSON.CF.Usage.pages;
              const workersSum = config_JSON.CF.Usage.workers;
              const total = Number.isFinite(config_JSON.CF.Usage.max)
                ? (config_JSON.CF.Usage.max / 1000) * 1024
                : 1024 * 100;
              responseHeaders["Subscription-Userinfo"] =
                `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=4102329600`; //
            }
            const isSubConverterRequest =
              url.searchParams.has("b64") ||
              url.searchParams.has("base64") ||
              request.headers.get("subconverter-request") ||
              request.headers.get("subconverter-version") ||
              ua.includes("subconverter") ||
              ua.includes("CF-Workers-SUB".toLowerCase()) ||
              به_عنوان_برگزیده_اشتراک_سازنده;
            const اشتراک_نوع = isSubConverterRequest
              ? "mixed"
              : url.searchParams.has("target")
                ? url.searchParams.get("target")
                : url.searchParams.has(گشا("Y2xhc2g=")) ||
                    ua.includes(گشا("Y2xhc2g=")) ||
                    ua.includes("meta") ||
                    ua.includes(گشا("bWlob21v"))
                  ? گشا("Y2xhc2g=")
                  : url.searchParams.has("sb") ||
                      url.searchParams.has(گشا("c2luZ2JveA==")) ||
                      ua.includes(گشا("c2luZ2JveA==")) ||
                      ua.includes(گشا("c2luZy1ib3g="))
                    ? گشا("c2luZ2JveA==")
                    : url.searchParams.has("surge") || ua.includes("surge")
                      ? "surge&ver=4"
                      : url.searchParams.has("quanx") || ua.includes("quantumult")
                        ? "quanx"
                        : url.searchParams.has("loon") || ua.includes("loon")
                          ? "loon"
                          : "mixed";

            if (!ua.includes("mozilla"))
              responseHeaders["Content-Disposition"] =
                `attachment; filename*=utf-8''${encodeURIComponent(config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUBNAME)}`;
            const پروتکل_نوع =
              (url.searchParams.has("surge") || ua.includes("surge")) &&
              config_JSON[گشا("5Y2P6K6u57G75Z6L")] !== گشا("c3M=")
                ? "tro" + "jan"
                : config_JSON[گشا("5Y2P6K6u57G75Z6L")];
            let اشتراک_محتوا = "";
            if (اشتراک_نوع === "mixed") {
              const لایه_امن_قطعه_پارامتر =
                config_JSON[گشا("VExT5YiG54mH")] == "Shadowrocket"
                  ? `&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}`
                  : config_JSON[گشا("VExT5YiG54mH")] == "Happ"
                    ? `&fragment=${encodeURIComponent("3,1,tlshello")}`
                    : "";
              let کامل_برگزیده_آی_پی = [],
                دیگر_گره_پیوند = "",
                میانجی_برگشتی_آی_پی_مخزن = [];

              if (!url.searchParams.has("sub") && config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].local) {
                //
                const کامل_برگزیده_فهرست = config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][
                  گشا("6ZqP5py6SVA=")
                ]
                  ? (
                      await تولید_تصادفی_آی_پی(
                        request,
                        config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][گشا("6ZqP5py65pWw6YeP")],
                        config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][گشا("5oyH5a6a56uv5Y+j")],
                      )
                    )[0]
                  : (await env.KV.get("ADD.txt"))
                    ? await تبدیل_به_آرایه(await env.KV.get("ADD.txt"))
                    : (
                        await تولید_تصادفی_آی_پی(
                          request,
                          config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][
                            گشا("6ZqP5py65pWw6YeP")
                          ],
                          config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")][گشا("5pys5ZywSVDlupM=")][
                            گشا("5oyH5a6a56uv5Y+j")
                          ],
                        )
                      )[0];
                const برگزیده_ای_پی_آی = [],
                  برگزیده_آی_پی = [],
                  دیگر_گره = [];
                for (const عنصر of کامل_برگزیده_فهرست) {
                  if (عنصر.toLowerCase().startsWith("sub://")) {
                    برگزیده_ای_پی_آی.push(عنصر);
                  } else {
                    const یادداشت_موقعیت = عنصر.indexOf("#");
                    const نشانی_بخش = یادداشت_موقعیت > -1 ? عنصر.slice(0, یادداشت_موقعیت) : عنصر;
                    const یادداشت_بخش = یادداشت_موقعیت > -1 ? عنصر.slice(یادداشت_موقعیت) : "";
                    const subMatch = عنصر.match(/sub\s*=\s*([^\s&#]+)/i);
                    if (subMatch && subMatch[1].trim().includes(".")) {
                      const برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی = عنصر
                        .toLowerCase()
                        .includes(گشا("cHJveHlpcD10cnVl"));
                      if (برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی)
                        برگزیده_ای_پی_آی.push(
                          "sub://" +
                            subMatch[1].trim() +
                            گشا("P3Byb3h5aXA9dHJ1ZQ==") +
                            (عنصر.includes("#") ? "#" + عنصر.split("#")[1] : ""),
                        );
                      else
                        برگزیده_ای_پی_آی.push(
                          "sub://" + subMatch[1].trim() + (عنصر.includes("#") ? "#" + عنصر.split("#")[1] : ""),
                        );
                    } else if (نشانی_بخش.toLowerCase().startsWith("https://")) {
                      برگزیده_ای_پی_آی.push(عنصر);
                    } else if (نشانی_بخش.toLowerCase().includes("://")) {
                      if (عنصر.includes("#")) {
                        const نشانی_یادداشت_جداسازی = عنصر.split("#");
                        دیگر_گره.push(
                          نشانی_یادداشت_جداسازی[0] +
                            "#" +
                            encodeURIComponent(decodeURIComponent(نشانی_یادداشت_جداسازی[1])),
                        );
                      } else دیگر_گره.push(عنصر);
                    } else {
                      if (نشانی_بخش.includes("*")) {
                        برگزیده_آی_پی.push(جایگزینی_ستاره_است_تصادفی_نویسه(نشانی_بخش) + یادداشت_بخش);
                      } else برگزیده_آی_پی.push(عنصر);
                    }
                  }
                }
                const درخواست_برگزیده_ای_پی_آی_محتوا = await درخواست_برگزیده_ای_پی_آی(برگزیده_ای_پی_آی, "443");
                const ادغام_دیگر_گره_آرایه = [...new Set(دیگر_گره.concat(درخواست_برگزیده_ای_پی_آی_محتوا[1]))];
                دیگر_گره_پیوند = ادغام_دیگر_گره_آرایه.length > 0 ? ادغام_دیگر_گره_آرایه.join("\n") + "\n" : "";
                const برگزیده_ای_پی_آی_آی_پی = درخواست_برگزیده_ای_پی_آی_محتوا[0];
                میانجی_برگشتی_آی_پی_مخزن = درخواست_برگزیده_ای_پی_آی_محتوا[3] || [];
                کامل_برگزیده_آی_پی = [...new Set(برگزیده_آی_پی.concat(برگزیده_ای_پی_آی_آی_پی))];
              } else {
                //
                let برگزیده_اشتراک_سازنده_میزبان =
                  url.searchParams.get("sub") || config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUB;
                const [برگزیده_سازنده_آی_پی_آرایه, برگزیده_سازنده_دیگر_گره] =
                  await گرفتن_برگزیده_اشتراک_سازنده_داده(برگزیده_اشتراک_سازنده_میزبان);
                کامل_برگزیده_آی_پی = کامل_برگزیده_آی_پی.concat(برگزیده_سازنده_آی_پی_آرایه);
                دیگر_گره_پیوند += برگزیده_سازنده_دیگر_گره;
              }
              const پیوند_پنهان_پارامتر = config_JSON.ECH
                ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + "+" : "") + config_JSON.ECHConfig.DNS)}`
                : "";
              const isLoonOrSurge = ua.includes("loon") || ua.includes("surge");
              const {
                type: انتقال_پروتکل,
                [گشا("6Lev5b6E5a2X5q615ZCN")]: مسیر_نام_فیلد,
                [گشا("5Z+f5ZCN5a2X5q615ZCN")]: دامنه_نام_فیلد,
              } = گرفتن_انتقال_پروتکل_پیکربندی(config_JSON);
              اشتراک_محتوا =
                دیگر_گره_پیوند +
                کامل_برگزیده_آی_پی
                  .map((اصلی_نشانی) => {
                    //
                    //
                    //
                    //
                    //
                    const regex =
                      /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
                    const match = اصلی_نشانی.match(regex);

                    let گره_نشانی,
                      گره_درگاه = "443",
                      گره_یادداشت;

                    if (match) {
                      گره_نشانی = match[1]; //
                      گره_درگاه = match[2] ? match[2] : "443"; //
                      گره_یادداشت = match[3] || گره_نشانی; //
                    } else {
                      //
                      console.warn(
                        `${گشا("W+iuoumYheWGheWuuV0g5LiN6KeE6IyD55qESVDmoLzlvI/lt7Llv73nlaU6IA==")}${اصلی_نشانی}`,
                      );
                      return null;
                    }

                    let کامل_گره_مسیر = config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")];

                    const زنجیره_ای_میانجی_تطبیق = گره_یادداشت.match(
                      new RegExp(گشا("XCQoc29ja3M1fGh0dHB8aHR0cHN8dHVybnxzc3RwKTpcL1wvKFteI1xzXSsp"), "i"),
                    );
                    if (زنجیره_ای_میانجی_تطبیق) {
                      try {
                        const میانجی_پروتکل = زنجیره_ای_میانجی_تطبیق[1].toLowerCase(),
                          میانجی_پارامتر = زنجیره_ای_میانجی_تطبیق[2];
                        const زنجیره_ای_میانجی_داده = {
                          type: میانجی_پروتکل,
                          ...گرفتن_حساب_میانجی(میانجی_پارامتر, گرفتن_میانجی_پیش_فرض_درگاه(میانجی_پروتکل)),
                        };
                        کامل_گره_مسیر = `/video/${base64SecretEncode(JSON.stringify(زنجیره_ای_میانجی_داده), userID) + (config_JSON[گشا("5ZCv55SoMFJUVA==")] ? "?ed=2560" : "")}`;
                        گره_یادداشت = گره_یادداشت.replace(زنجیره_ای_میانجی_تطبیق[0], "").trim() || گره_نشانی;
                      } catch (error) {
                        console.warn(
                          `${گشا("W+iuoumYheWGheWuuV0g6ZO+5byP5Luj55CG6Kej5p6Q5aSx6LSl77yM5bey5b+955Wl6K+l5oyH5LukOiA=")}${زنجیره_ای_میانجی_تطبیق[0]} (${error && error.message ? error.message : error})`,
                        );
                      }
                    } else if (میانجی_برگشتی_آی_پی_مخزن.length > 0) {
                      const تطبیق_با_میانجی_برگشتی_آی_پی = میانجی_برگشتی_آی_پی_مخزن.find((p) => p.includes(گره_نشانی));
                      if (تطبیق_با_میانجی_برگشتی_آی_پی)
                        کامل_گره_مسیر =
                          `${config_JSON.PATH}${گشا("L3Byb3h5aXA9")}${تطبیق_با_میانجی_برگشتی_آی_پی}`.replace(
                            /\/\//g,
                            "/",
                          ) + (config_JSON[گشا("5ZCv55SoMFJUVA==")] ? "?ed=2560" : "");
                    }
                    if (isLoonOrSurge) کامل_گره_مسیر = کامل_گره_مسیر.replace(/,/g, "%2C");

                    if (پروتکل_نوع === گشا("c3M=") && !به_عنوان_برگزیده_اشتراک_سازنده) {
                      if (!config_JSON[گشا("U1M=")].TLS) {
                        const لایه_امن_درگاه = [443, 2053, 2083, 2087, 2096, 8443];
                        const بدون_لایه_امن_درگاه = [80, 2052, 2082, 2086, 2095, 8080];
                        گره_درگاه = String(بدون_لایه_امن_درگاه[لایه_امن_درگاه.indexOf(Number(گره_درگاه))] ?? گره_درگاه);
                      }
                      کامل_گره_مسیر = (
                        کامل_گره_مسیر.includes("?")
                          ? کامل_گره_مسیر.replace(
                              "?",
                              "?enc=" + config_JSON[گشا("U1M=")][گشا("5Yqg5a+G5pa55byP")] + "&",
                            )
                          : کامل_گره_مسیر + "?enc=" + config_JSON[گشا("U1M=")][گشا("5Yqg5a+G5pa55byP")]
                      ).replace(/([=,])/g, "\\$1");
                      if (!isSubConverterRequest) کامل_گره_مسیر = کامل_گره_مسیر + ";mux=0";
                      return `${پروتکل_نوع}://${btoa(config_JSON[گشا("U1M=")][گشا("5Yqg5a+G5pa55byP")] + ":00000000-0000-4000-8000-000000000000")}@${گره_نشانی}:${گره_درگاه}?plugin=v2${encodeURIComponent("ray-plugin;mode=websocket;host=example.com;path=" + (config_JSON[گشا("6ZqP5py66Lev5b6E")] ? تصادفی_مسیر(کامل_گره_مسیر) : کامل_گره_مسیر) + (config_JSON[گشا("U1M=")].TLS ? ";tls" : "")) + پیوند_پنهان_پارامتر + لایه_امن_قطعه_پارامتر}#${encodeURIComponent(گره_یادداشت)}`;
                    } else {
                      const انتقال_مسیر_پارامتر_مقدار = گرفتن_انتقال_مسیر_پارامتر_مقدار(
                        config_JSON,
                        کامل_گره_مسیر,
                        به_عنوان_برگزیده_اشتراک_سازنده,
                      );
                      return `${پروتکل_نوع}://00000000-0000-4000-8000-000000000000@${گره_نشانی}:${گره_درگاه}?security=tls&type=${انتقال_پروتکل + پیوند_پنهان_پارامتر}&${دامنه_نام_فیلد}=example.com&fp=${config_JSON.Fingerprint}&sni=example.com&${مسیر_نام_فیلد}=${encodeURIComponent(انتقال_مسیر_پارامتر_مقدار) + لایه_امن_قطعه_پارامتر}&encryption=none&alpn=${encodeURIComponent(config_JSON.ALPN)}#${encodeURIComponent(گره_یادداشت)}`;
                    }
                  })
                  .filter((item) => item !== null)
                  .join("\n");
            } else {
              //
              const اشتراک_تبدیل_نشانی = `${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SUBAPI}/sub?target=${اشتراک_نوع}&url=${encodeURIComponent(url.protocol + "//" + url.host + "/sub?target=mixed&token=" + امروز_اشتراک_تبدیل_پشت_صحنه_اختصاصی_توکن + "&cnIspCode=" + شناسایی_اپراتور(request) + (url.searchParams.has("sub") && url.searchParams.get("sub") != "" ? `&sub=${url.searchParams.get("sub")}` : ""))}&config=${encodeURIComponent(config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SUBCONFIG)}&emoji=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SUBEMOJI}&list=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SUBLIST}&scv=${config_JSON[گشا("6Lez6L+H6K+B5Lmm6aqM6K+B")]}&xudp=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].XUDP}&udp=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].UDP}&tls13=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].TLS13}&append_type=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].APPEND_TYPE}&sort=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SORT}&expand=${config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].EXPAND}`;
              try {
                const response = await fetch(اشتراک_تبدیل_نشانی, {
                  headers: {
                    "User-Agent":
                      "Subconverter for " +
                      اشتراک_نوع +
                      " edge" +
                      گشا("dHVubmVsIChodHRwczovL2dpdGh1Yi5jb20v") +
                      کد_شناسه_فرهنگ[1] +
                      "/edge" +
                      گشا("dHVubmVsKQ=="),
                  },
                });
                if (response.ok) {
                  اشتراک_محتوا = await response.text();
                  if (url.searchParams.has("surge") || ua.includes("surge"))
                    اشتراک_محتوا = برنامه_پ_اشتراک_پیکربندی_پرونده_وصله_گرم(
                      اشتراک_محتوا,
                      url.protocol + "//" + url.host + "/sub?token=" + اشتراک_توکن + "&surge",
                      config_JSON,
                    );
                } else
                  return new Response(گشا("6K6i6ZiF6L2s5o2i5ZCO56uv5byC5bi477ya") + response.statusText, {
                    status: response.status,
                  });
              } catch (error) {
                return new Response(گشا("6K6i6ZiF6L2s5o2i5ZCO56uv5byC5bi477ya") + error.message, { status: 403 });
              }
            }

            if (!ua.includes("subconverter") && کاربر_کارخواه_درخواست_اشتراک) {
              const آمیختن_بعد_میزبان_ها = [...config_JSON.HOSTS].sort(() => Math.random() - 0.5);
              let جایگزینی_دامنه_شمارش = 0,
                جاری_تصادفی_میزبان = null;
              اشتراک_محتوا = اشتراک_محتوا
                .replace(/00000000-0000-4000-8000-000000000000/g, config_JSON.UUID)
                .replace(/MDAwMDAwMDAtMDAwMC00MDAwLTgwMDAtMDAwMDAwMDAwMDAw/g, btoa(config_JSON.UUID))
                .replace(/example\.com/g, () => {
                  if (جایگزینی_دامنه_شمارش % 2 === 0) {
                    const اصلی_میزبان =
                      آمیختن_بعد_میزبان_ها[Math.floor(جایگزینی_دامنه_شمارش / 2) % آمیختن_بعد_میزبان_ها.length];
                    جاری_تصادفی_میزبان = جایگزینی_ستاره_است_تصادفی_نویسه(اصلی_میزبان);
                  }
                  جایگزینی_دامنه_شمارش++;
                  return جاری_تصادفی_میزبان;
                });
            }

            if (
              اشتراک_نوع === "mixed" &&
              (!ua.includes("mozilla") || url.searchParams.has("b64") || url.searchParams.has("base64"))
            )
              اشتراک_محتوا = btoa(اشتراک_محتوا);

            if (اشتراک_نوع === گشا("c2luZ2JveA==")) {
              اشتراک_محتوا = await برنامه_ب_اشتراک_پیکربندی_پرونده_وصله_گرم(اشتراک_محتوا, config_JSON);
              responseHeaders["content-type"] = "application/json; charset=utf-8";
            } else if (اشتراک_نوع === گشا("Y2xhc2g=")) {
              اشتراک_محتوا = برنامه_الف_اشتراک_پیکربندی_پرونده_وصله_گرم(اشتراک_محتوا, config_JSON);
              responseHeaders["content-type"] = "application/x-yaml; charset=utf-8";
            }
            return new Response(اشتراک_محتوا, { status: 200, headers: responseHeaders });
          }
        } else if (مسیر_دسترسی === "locations") {
          //
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies
            .split(";")
            .find((c) => c.trim().startsWith("auth="))
            ?.split("=")[1];
          if (authCookie && authCookie == (await MD5MD5(UA + رمزنگاری_کلید_مخفی + مدیر_گذرواژه)))
            return fetch(
              new Request("https://speed.cloudflare.com/locations", {
                headers: { Referer: "https://speed.cloudflare.com/" },
              }),
            );
        } else if (مسیر_دسترسی === "robots.txt")
          return new Response("User-agent: *\nDisallow: /", {
            status: 200,
            headers: { "Content-Type": "text/plain; charset=UTF-8" },
          });
      } else if (!envUUID)
        return fetch(Pages_ایستا_صفحه + "/noKV").then((r) => {
          const headers = new Headers(r.headers);
          headers.set("Cache-Control", گشا("bm8tc3RvcmUsIG5vLWNhY2hlLCBtdXN0LXJldmFsaWRhdGUsIHByb3h5LXJldmFsaWRhdGU="));
          headers.set("Pragma", "no-cache");
          headers.set("Expires", "0");
          return new Response(r.body, { status: 404, statusText: r.statusText, headers });
        });
    }

    let صفحه_پوششی_نشانی = env.URL || "nginx";
    if (صفحه_پوششی_نشانی && صفحه_پوششی_نشانی !== "nginx" && صفحه_پوششی_نشانی !== "1101") {
      صفحه_پوششی_نشانی = صفحه_پوششی_نشانی.trim().replace(/\/$/, "");
      if (!صفحه_پوششی_نشانی.match(/^https?:\/\//i)) صفحه_پوششی_نشانی = "https://" + صفحه_پوششی_نشانی;
      if (صفحه_پوششی_نشانی.toLowerCase().startsWith("http://"))
        صفحه_پوششی_نشانی = "https://" + صفحه_پوششی_نشانی.substring(7);
      try {
        const u = new URL(صفحه_پوششی_نشانی);
        صفحه_پوششی_نشانی = u.protocol + "//" + u.host;
      } catch (e) {
        صفحه_پوششی_نشانی = "nginx";
      }
    }
    if (صفحه_پوششی_نشانی === "1101")
      return new Response(await html1101(url.host, دسترسی_آی_پی), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      });
    try {
      const میانجی_برگشتی_نشانی = new URL(صفحه_پوششی_نشانی),
        جدید_درخواست_سرآیند = new Headers(request.headers);
      جدید_درخواست_سرآیند.set("Host", میانجی_برگشتی_نشانی.host);
      جدید_درخواست_سرآیند.set("Referer", میانجی_برگشتی_نشانی.origin);
      جدید_درخواست_سرآیند.set("Origin", میانجی_برگشتی_نشانی.origin);
      if (!جدید_درخواست_سرآیند.has("User-Agent") && UA && UA !== "null") جدید_درخواست_سرآیند.set("User-Agent", UA);
      const میانجی_برگشتی_پاسخ = await fetch(میانجی_برگشتی_نشانی.origin + url.pathname + url.search, {
        method: request.method,
        headers: جدید_درخواست_سرآیند,
        body: request.body,
        cf: request.cf,
      });
      const محتوا_نوع = میانجی_برگشتی_پاسخ.headers.get("content-type") || "";
      //
      if (/text|javascript|json|xml/.test(محتوا_نوع)) {
        const پاسخ_محتوا = (await میانجی_برگشتی_پاسخ.text()).replaceAll(میانجی_برگشتی_نشانی.host, url.host);
        return new Response(پاسخ_محتوا, {
          status: میانجی_برگشتی_پاسخ.status,
          headers: { ...Object.fromEntries(میانجی_برگشتی_پاسخ.headers), "Cache-Control": "no-store" },
        });
      }
      return میانجی_برگشتی_پاسخ;
    } catch (error) {}
    return new Response(await nginx(), { status: 200, headers: { "Content-Type": "text/html; charset=UTF-8" } });
  },
};
// ===== داده‌های انتقال ضربدری =====
const فشرده_سرآیند_طول_کد = [
  13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28,
  28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10,
  13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6,
  5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23,
  22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22,
  23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26,
  20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27,
  27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27,
  27, 27, 27, 26, 30,
];

function گرفتن_ضربدری_اچ_تی_تی_پی_پوشش_نشانه(yourUUID) {
  return { [گشا("5aS0")]: yourUUID.slice(1, 7), [گشا("6ZSu")]: "_" + yourUUID.slice(25, 31) };
}

function محاسبه_فشرده_سرآیند_بایت_طول(رشته) {
  const بایت = new TextEncoder().encode(رشته);
  let تعداد_کل = 0;
  for (let i = 0; i < بایت.length; i++) {
    تعداد_کل += فشرده_سرآیند_طول_کد[بایت[i]];
  }
  return Math.ceil(تعداد_کل / 8);
}

function استخراج_ضربدری_اچ_تی_تی_پی_پوشش_مقدار(request, این_دستگاه_پوشش_سرآیند, این_دستگاه_پوشش_کلید) {
  const سرآیند_مقدار = request.headers.get(این_دستگاه_پوشش_سرآیند);
  if (سرآیند_مقدار) {
    try {
      const تحلیل_نشانی = new URL(سرآیند_مقدار, "https://x.invalid");
      const پرس_وجو_مقدار = تحلیل_نشانی.searchParams.get(این_دستگاه_پوشش_کلید);
      if (پرس_وجو_مقدار) return پرس_وجو_مقدار;
    } catch (e) {}
    return سرآیند_مقدار;
  }
  const درخواست_نشانی = new URL(request.url);
  return درخواست_نشانی.searchParams.get(این_دستگاه_پوشش_کلید) || "";
}

function اعتبارسنجی_ضربدری_اچ_تی_تی_پی_پوشش(request, این_دستگاه_پوشش_سرآیند, این_دستگاه_پوشش_کلید) {
  const padding_مقدار = استخراج_ضربدری_اچ_تی_تی_پی_پوشش_مقدار(request, این_دستگاه_پوشش_سرآیند, این_دستگاه_پوشش_کلید);
  if (!padding_مقدار) return true;
  const huffman_طول = محاسبه_فشرده_سرآیند_بایت_طول(padding_مقدار);
  return huffman_طول >= 98 && huffman_طول <= 1002;
}

const ضربدری_اچ_تی_تی_پی_پایه۶۲_مجموعه_نویسه = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function تولید_ضربدری_اچ_تی_تی_پی_پوشش_رشته(طول) {
  const مجموعه_نویسه_طول = ضربدری_اچ_تی_تی_پی_پایه۶۲_مجموعه_نویسه.length;
  let نتیجه = "";
  for (let i = 0; i < طول; i++) {
    نتیجه += ضربدری_اچ_تی_تی_پی_پایه۶۲_مجموعه_نویسه[Math.floor(Math.random() * مجموعه_نویسه_طول)];
  }
  return نتیجه;
}

async function پردازش_ضربدری_اچ_تی_تی_پی_درخواست(request, yourUUID, میانجی_برگشتی_بستر = {}) {
  if (!request.body) return new Response("Bad Request", { status: 400 });
  const { [گشا("5aS0")]: این_دستگاه_پوشش_سرآیند, [گشا("6ZSu")]: این_دستگاه_پوشش_کلید } =
    گرفتن_ضربدری_اچ_تی_تی_پی_پوشش_نشانه(yourUUID);
  if (!اعتبارسنجی_ضربدری_اچ_تی_تی_پی_پوشش(request, این_دستگاه_پوشش_سرآیند, این_دستگاه_پوشش_کلید))
    return new Response("Bad Request", { status: 400 });
  const reader = request.body.getReader();
  const بسته_نخست = await خواندن_ضربدری_اچ_تی_تی_پی_بسته_نخست(reader, yourUUID);
  if (!بسته_نخست) {
    try {
      reader.releaseLock();
    } catch (e) {}
    return new Response("Invalid request", { status: 400 });
  }
  if (isSpeedTestSite(بسته_نخست.hostname) && میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] === null) {
    try {
      reader.releaseLock();
    } catch (e) {}
    return new Response(ساخت_محلی_204_پاسخ(بسته_نخست.respHeader), {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "X-Accel-Buffering": "no",
        "Cache-Control": "no-store",
      },
    });
  }
  if (بسته_نخست.isUDP && بسته_نخست[گشا("5Y2P6K6u")] !== گشا("dHJvamFu") && بسته_نخست.port !== 53) {
    try {
      reader.releaseLock();
    } catch (e) {}
    return new Response("UDP is not supported", { status: 400 });
  }

  const responseHeaders = new Headers({
    "Content-Type": "application/octet-stream",
    "X-Accel-Buffering": "no",
    "Cache-Control": "no-store",
  });

  try {
    const پاسخ_نشانی = new URL("https://x.invalid/");
    پاسخ_نشانی.searchParams.set(
      این_دستگاه_پوشش_کلید,
      تولید_ضربدری_اچ_تی_تی_پی_پوشش_رشته(100 + Math.floor(Math.random() * 901)),
    );
    responseHeaders.set(این_دستگاه_پوشش_سرآیند, پاسخ_نشانی.toString());
  } catch (e) {}

  if (بسته_نخست.isUDP)
    return پردازش_ضربدری_اچ_تی_تی_پی_یو_دی_پی_درخواست(بسته_نخست, reader, request, میانجی_برگشتی_بستر, responseHeaders);

  try {
    reader.releaseLock();
  } catch (e) {}

  const remoteConnWrapper = {
    socket: null,
    connectingPromise: null,
    retryConnect: null,
    downlinkDrain: Promise.resolve(),
  };
  const abortController = new AbortController();
  let پاک_شده = false;
  const پاکسازی = (reason) => {
    if (پاک_شده) return;
    پاک_شده = true;
    try {
      abortController.abort(reason);
    } catch (e) {}
    منقضی_تی_سی_پی_اتصال_نسل(remoteConnWrapper);
  };

  const نگهدارنده_وب_سوکت = { readyState: WebSocket.OPEN };

  let socket;
  try {
    socket = await forwardataTCP(
      بسته_نخست.hostname,
      بسته_نخست.port,
      بسته_نخست.rawData,
      نگهدارنده_وب_سوکت,
      بسته_نخست.respHeader,
      remoteConnWrapper,
      yourUUID,
      request,
      میانجی_برگشتی_بستر,
      بسته_نخست[گشا("5Y2P6K6u")] === گشا("dHJvamFu"),
      بسته_نخست[گشا("5Y6f5aeL5pWw5o2u")],
      true,
    );
  } catch (err) {
    log(`${گشا("W+WPiUhUVFAtUGlwZV0g6L+e5o6l5aSx6LSlOiA=")}${err?.message || err}`);
    پاکسازی(err);
    return new Response("bad gateway", { status: 502 });
  }
  if (!socket) {
    پاکسازی(new Error("socket is null"));
    return new Response("bad gateway", { status: 502 });
  }

  const بالارو_وعده = (async () => {
    const بالارو_بسته_بندی_ابزار = ایجاد_بالارو_دانه_بسته_بندی_جریان();
    const جابه_جایی_وعده = بالارو_بسته_بندی_ابزار.readable.pipeTo(socket.writable, { signal: abortController.signal });
    void جابه_جایی_وعده.catch(پاکسازی);
    const بالارو_خواننده = request.body.getReader();
    const گرفتن_لغو_بالارو_خواننده = () => {
      try {
        بالارو_خواننده.cancel(abortController.signal.reason).catch(() => {});
      } catch (e) {}
    };
    abortController.signal.addEventListener("abort", گرفتن_لغو_بالارو_خواننده, { once: true });
    try {
      try {
        while (true) {
          const { done, value } = await بالارو_خواننده.read();
          if (done) break;
          if (value?.byteLength) await بالارو_بسته_بندی_ابزار[گشا("5YaZ5YWl")](value);
        }
      } finally {
        abortController.signal.removeEventListener("abort", گرفتن_لغو_بالارو_خواننده);
        try {
          بالارو_خواننده.releaseLock();
        } catch (e) {}
      }
    } finally {
      try {
        await بالارو_بسته_بندی_ابزار[گشا("57uT5p2f")]();
      } catch (e) {}
    }
    await جابه_جایی_وعده;
  })();

  const پاسخ_جریان =
    typeof IdentityTransformStream !== "undefined" ? new IdentityTransformStream() : new TransformStream();
  const پایین_رو_وعده = (async () => {
    const writer = پاسخ_جریان.writable.getWriter();
    try {
      if (معتبر_داده_طول(بسته_نخست.respHeader) > 0) await writer.write(بسته_نخست.respHeader);
    } catch (error) {
      try {
        await writer.abort(error);
      } catch (e) {}
      throw error;
    } finally {
      try {
        writer.releaseLock();
      } catch (e) {}
    }
    await socket.readable.pipeTo(پاسخ_جریان.writable, { signal: abortController.signal });
  })();

  void بالارو_وعده.catch(پاکسازی);
  void پایین_رو_وعده.then(() => پاکسازی(), پاکسازی);
  void Promise.allSettled([بالارو_وعده, پایین_رو_وعده]);

  return new Response(پاسخ_جریان.readable, { status: 200, headers: responseHeaders });
}

function پردازش_ضربدری_اچ_تی_تی_پی_یو_دی_پی_درخواست(بسته_نخست, reader, request, میانجی_برگشتی_بستر, responseHeaders) {
  const پروتکل_دوم_یو_دی_پی_بستر = {
    [گشا("57yT5a2Y")]: new Uint8Array(0),
    [گشا("5Y+N5Luj5Zyw5Z2A")]: میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")],
  };
  return new Response(
    new ReadableStream({
      async start(controller) {
        let بسته_شده = false;
        let udpRespHeader = بسته_نخست.respHeader;
        const پل_ضربدری = {
          readyState: WebSocket.OPEN,
          send(data) {
            if (بسته_شده) return;
            try {
              const chunk =
                data instanceof Uint8Array
                  ? data
                  : data instanceof ArrayBuffer
                    ? new Uint8Array(data)
                    : ArrayBuffer.isView(data)
                      ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
                      : new Uint8Array(data);
              controller.enqueue(chunk);
            } catch (e) {
              بسته_شده = true;
              this.readyState = WebSocket.CLOSED;
            }
          },
          close() {
            if (بسته_شده) return;
            بسته_شده = true;
            this.readyState = WebSocket.CLOSED;
            try {
              controller.close();
            } catch (e) {}
          },
        };
        let ارجاع_شکست = false;
        try {
          if (بسته_نخست[گشا("5Y2P6K6u")] === گشا("dHJvamFu")) {
            پروتکل_دوم_یو_دی_پی_بستر[گشا("55uu5qCH5Li75py6")] = بسته_نخست.hostname;
            پروتکل_دوم_یو_دی_پی_بستر[گشا("55uu5qCH56uv5Y+j")] = بسته_نخست.port;
            if (پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5Luj5Zyw5Z2A")])
              await ارجاع_پروتکل_دوم_یو_دی_پی_داده(
                بسته_نخست[گشا("5Y6f5aeL5pWw5o2u")],
                پل_ضربدری,
                پروتکل_دوم_یو_دی_پی_بستر,
                request,
              );
          }
          if (
            !(بسته_نخست[گشا("5Y2P6K6u")] === گشا("dHJvamFu") && پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5Luj5Zyw5Z2A")]) &&
            بسته_نخست.rawData?.byteLength
          ) {
            if (بسته_نخست[گشا("5Y2P6K6u")] === گشا("dHJvamFu"))
              await ارجاع_پروتکل_دوم_یو_دی_پی_داده(بسته_نخست.rawData, پل_ضربدری, پروتکل_دوم_یو_دی_پی_بستر, request);
            else await forwardataudp(بسته_نخست.rawData, پل_ضربدری, udpRespHeader, request);
            udpRespHeader = null;
          }
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (!value || value.byteLength === 0) continue;
            if (بسته_نخست[گشا("5Y2P6K6u")] === گشا("dHJvamFu"))
              await ارجاع_پروتکل_دوم_یو_دی_پی_داده(value, پل_ضربدری, پروتکل_دوم_یو_دی_پی_بستر, request);
            else await forwardataudp(value, پل_ضربدری, udpRespHeader, request);
            udpRespHeader = null;
          }
        } catch (err) {
          ارجاع_شکست = true;
          log(`${گشا("W+WPiUhUVFDovazlj5FdIOWkhOeQhuWksei0pTog")}${err?.message || err}`);
          closeSocketQuietly(پل_ضربدری);
        } finally {
          const نگه_داشتن_پروتکل_دوم_یو_دی_پی_میانجی_برگشتی_پایین_رو =
            !ارجاع_شکست &&
            بسته_نخست[گشا("5Y2P6K6u")] === گشا("dHJvamFu") &&
            پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5Luj5Zyw5Z2A")] &&
            پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")];
          if (!نگه_داشتن_پروتکل_دوم_یو_دی_پی_میانجی_برگشتی_پایین_رو) {
            try {
              پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")]?.close();
            } catch (e) {}
            closeSocketQuietly(پل_ضربدری);
          }
          try {
            reader.releaseLock();
          } catch (e) {}
        }
      },
      cancel() {
        try {
          پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")]?.close();
        } catch (e) {}
        try {
          reader.releaseLock();
        } catch (e) {}
      },
    }),
    { status: 200, headers: responseHeaders },
  );
}

function معتبر_داده_طول(data) {
  if (!data) return 0;
  if (typeof data.byteLength === "number") return data.byteLength;
  if (typeof data.length === "number") return data.length;
  return 0;
}

function منقضی_تی_سی_پی_اتصال_نسل(remoteConnWrapper) {
  if (!remoteConnWrapper) return;
  remoteConnWrapper.generation =
    (Number.isInteger(remoteConnWrapper.generation) ? remoteConnWrapper.generation : 0) + 1;
  const socket = remoteConnWrapper.socket;
  remoteConnWrapper.socket = null;
  remoteConnWrapper.downlinkController = null;
  remoteConnWrapper.downlinkDrain = Promise.resolve();
  try {
    socket?.close?.();
  } catch (e) {}
}

function باز_شروع_تی_سی_پی_اتصال_نسل(remoteConnWrapper) {
  if (!Number.isInteger(remoteConnWrapper.generation)) remoteConnWrapper.generation = 0;
  const generation = ++remoteConnWrapper.generation;
  const previousSocket = remoteConnWrapper.socket;
  remoteConnWrapper.socket = null;
  const previousDownlink = remoteConnWrapper.downlinkController;
  remoteConnWrapper.downlinkController = null;
  const previousDrain = remoteConnWrapper.downlinkDrain || Promise.resolve();
  let currentDrain;
  try {
    currentDrain = previousDownlink?.[گشا("5YGc5q2i5bm25Yi35paw")]?.() || Promise.resolve();
  } catch (error) {
    currentDrain = Promise.reject(error);
  }
  const downlinkDrain = Promise.all([previousDrain, currentDrain]);
  //
  downlinkDrain.catch(() => {});
  remoteConnWrapper.downlinkDrain = downlinkDrain;
  try {
    previousSocket?.close?.();
  } catch (e) {}
  return { generation, downlinkDrain };
}

async function خواندن_ضربدری_اچ_تی_تی_پی_بسته_نخست(reader, token) {
  const decoder = پروتکل_نخست_متن_کدگشا;

  const تلاش_تحلیل_پروتکل_نخست_بسته_نخست = (data) => {
    const length = data.byteLength;
    if (length < 18) return { [گشا("54q25oCB")]: "need_more" };
    if (!شناسه_بایت_تطبیق(data, 1, token)) return { [گشا("54q25oCB")]: "invalid" };

    const optLen = data[17];
    const cmdIndex = 18 + optLen;
    if (length < cmdIndex + 1) return { [گشا("54q25oCB")]: "need_more" };

    const cmd = data[cmdIndex];
    if (cmd !== 1 && cmd !== 2) return { [گشا("54q25oCB")]: "invalid" };

    const portIndex = cmdIndex + 1;
    if (length < portIndex + 3) return { [گشا("54q25oCB")]: "need_more" };

    const port = (data[portIndex] << 8) | data[portIndex + 1];
    const addressType = data[portIndex + 2];
    const addressIndex = portIndex + 3;
    let headerLen = -1;
    let hostname = "";

    if (addressType === 1) {
      if (length < addressIndex + 4) return { [گشا("54q25oCB")]: "need_more" };
      hostname = `${data[addressIndex]}.${data[addressIndex + 1]}.${data[addressIndex + 2]}.${data[addressIndex + 3]}`;
      headerLen = addressIndex + 4;
    } else if (addressType === 2) {
      if (length < addressIndex + 1) return { [گشا("54q25oCB")]: "need_more" };
      const domainLen = data[addressIndex];
      if (length < addressIndex + 1 + domainLen) return { [گشا("54q25oCB")]: "need_more" };
      hostname = decoder.decode(data.subarray(addressIndex + 1, addressIndex + 1 + domainLen));
      headerLen = addressIndex + 1 + domainLen;
    } else if (addressType === 3) {
      if (length < addressIndex + 16) return { [گشا("54q25oCB")]: "need_more" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const base = addressIndex + i * 2;
        ipv6.push(((data[base] << 8) | data[base + 1]).toString(16));
      }
      hostname = ipv6.join(":");
      headerLen = addressIndex + 16;
    } else return { [گشا("54q25oCB")]: "invalid" };

    if (!hostname) return { [گشا("54q25oCB")]: "invalid" };

    return {
      [گشا("54q25oCB")]: "ok",
      [گشا("57uT5p6c")]: {
        [گشا("5Y2P6K6u")]: "vl" + "ess",
        hostname,
        port,
        isUDP: cmd === 2,
        rawData: data.subarray(headerLen),
        respHeader: new Uint8Array([data[0], 0]),
        [گشا("5Y6f5aeL5pWw5o2u")]: null,
      },
    };
  };

  const تلاش_تحلیل_پروتکل_دوم_بسته_نخست = (data) => {
    const گذرواژه_درهم = sha224(token);
    const گذرواژه_درهم_بایت = new TextEncoder().encode(گذرواژه_درهم);
    const length = data.byteLength;
    if (length < 58) return { [گشا("54q25oCB")]: "need_more" };
    if (data[56] !== 0x0d || data[57] !== 0x0a) return { [گشا("54q25oCB")]: "invalid" };
    for (let i = 0; i < 56; i++) {
      if (data[i] !== گذرواژه_درهم_بایت[i]) return { [گشا("54q25oCB")]: "invalid" };
    }

    const شروع_میانجی = 58;
    if (length < شروع_میانجی + 2) return { [گشا("54q25oCB")]: "need_more" };
    const cmd = data[شروع_میانجی];
    if (cmd !== 1 && cmd !== 3) return { [گشا("54q25oCB")]: "invalid" };
    const isUDP = cmd === 3;

    const atype = data[شروع_میانجی + 1];
    let cursor = شروع_میانجی + 2;
    let hostname = "";

    if (atype === 1) {
      if (length < cursor + 4) return { [گشا("54q25oCB")]: "need_more" };
      hostname = `${data[cursor]}.${data[cursor + 1]}.${data[cursor + 2]}.${data[cursor + 3]}`;
      cursor += 4;
    } else if (atype === 3) {
      if (length < cursor + 1) return { [گشا("54q25oCB")]: "need_more" };
      const domainLen = data[cursor];
      if (length < cursor + 1 + domainLen) return { [گشا("54q25oCB")]: "need_more" };
      hostname = decoder.decode(data.subarray(cursor + 1, cursor + 1 + domainLen));
      cursor += 1 + domainLen;
    } else if (atype === 4) {
      if (length < cursor + 16) return { [گشا("54q25oCB")]: "need_more" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const base = cursor + i * 2;
        ipv6.push(((data[base] << 8) | data[base + 1]).toString(16));
      }
      hostname = ipv6.join(":");
      cursor += 16;
    } else return { [گشا("54q25oCB")]: "invalid" };

    if (!hostname) return { [گشا("54q25oCB")]: "invalid" };
    if (length < cursor + 4) return { [گشا("54q25oCB")]: "need_more" };

    const port = (data[cursor] << 8) | data[cursor + 1];
    if (data[cursor + 2] !== 0x0d || data[cursor + 3] !== 0x0a) return { [گشا("54q25oCB")]: "invalid" };
    const dataOffset = cursor + 4;

    return {
      [گشا("54q25oCB")]: "ok",
      [گشا("57uT5p6c")]: {
        [گشا("5Y2P6K6u")]: گشا("dHJvamFu"),
        hostname,
        port,
        isUDP,
        rawData: data.subarray(dataOffset),
        [گشا("5Y6f5aeL5pWw5o2u")]: data,
        respHeader: null,
      },
    };
  };

  let buffer = new Uint8Array(1024);
  let offset = 0;

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      if (offset === 0) return null;
      break;
    }

    const chunk = value instanceof Uint8Array ? value : new Uint8Array(value);
    if (offset + chunk.byteLength > buffer.byteLength) {
      const newBuffer = new Uint8Array(Math.max(buffer.byteLength * 2, offset + chunk.byteLength));
      newBuffer.set(buffer.subarray(0, offset));
      buffer = newBuffer;
    }

    buffer.set(chunk, offset);
    offset += chunk.byteLength;

    const جاری_داده = buffer.subarray(0, offset);
    const پروتکل_دوم_نتیجه = تلاش_تحلیل_پروتکل_دوم_بسته_نخست(جاری_داده);
    if (پروتکل_دوم_نتیجه[گشا("54q25oCB")] === "ok") return { ...پروتکل_دوم_نتیجه[گشا("57uT5p6c")], reader };

    const پروتکل_نخست_نتیجه = تلاش_تحلیل_پروتکل_نخست_بسته_نخست(جاری_داده);
    if (پروتکل_نخست_نتیجه[گشا("54q25oCB")] === "ok") return { ...پروتکل_نخست_نتیجه[گشا("57uT5p6c")], reader };

    if (پروتکل_دوم_نتیجه[گشا("54q25oCB")] === "invalid" && پروتکل_نخست_نتیجه[گشا("54q25oCB")] === "invalid")
      return null;
  }

  const نهایی_داده = buffer.subarray(0, offset);
  const نهایی_پروتکل_دوم_نتیجه = تلاش_تحلیل_پروتکل_دوم_بسته_نخست(نهایی_داده);
  if (نهایی_پروتکل_دوم_نتیجه[گشا("54q25oCB")] === "ok") return { ...نهایی_پروتکل_دوم_نتیجه[گشا("57uT5p6c")], reader };
  const نهایی_پروتکل_نخست_نتیجه = تلاش_تحلیل_پروتکل_نخست_بسته_نخست(نهایی_داده);
  if (نهایی_پروتکل_نخست_نتیجه[گشا("54q25oCB")] === "ok") return { ...نهایی_پروتکل_نخست_نتیجه[گشا("57uT5p6c")], reader };
  return null;
}
// ===== داده‌های انتقال gRPC =====
async function پردازش_جی_آر_پی_سی_درخواست(request, yourUUID, میانجی_برگشتی_بستر = {}) {
  if (!request.body) return new Response("Bad Request", { status: 400 });
  const reader = request.body.getReader();
  const remoteConnWrapper = {
    socket: null,
    connectingPromise: null,
    retryConnect: null,
    downlinkDrain: Promise.resolve(),
  };
  const منقضی_دور_اتصال = () => منقضی_تی_سی_پی_اتصال_نسل(remoteConnWrapper);
  let isDnsQuery = false;
  const پروتکل_دوم_یو_دی_پی_بستر = {
    [گشا("57yT5a2Y")]: new Uint8Array(0),
    [گشا("5Y+N5Luj5Zyw5Z2A")]: میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")],
  };
  let تشخیص_آیا_است_پروتکل_دوم = null;
  let جاری_نوشتن_سوکت = null;
  let دور_نویسنده = null;
  let جی_آر_پی_سی_بالارو_نوشتن_صف = null;
  //
  const grpcHeaders = new Headers({
    "Content-Type": "application/grpc",
    "grpc-status": "0",
    "X-Accel-Buffering": "no",
    "Cache-Control": "no-store",
  });

  const پایین_رو_انبار_سقف = پایین_رو_دانه_بسته_بایت;
  const پایین_رو_فاصله_تازه_سازی = 1;

  return new Response(
    new ReadableStream({
      async start(controller) {
        let بسته_شده = false;
        let ارسال_صف = [];
        let صف_بایت_داده = 0;
        let تازه_سازی_زمان_سنج = null;
        let تازه_سازی_ریزکار_درصف_شده = false;
        const grpcBridge = {
          readyState: WebSocket.OPEN,
          send(data) {
            if (بسته_شده) return;
            const chunk = data instanceof Uint8Array ? data : new Uint8Array(data);
            const بایت_طول_آرایه = [];
            let remaining = chunk.byteLength >>> 0;
            while (remaining > 127) {
              بایت_طول_آرایه.push((remaining & 0x7f) | 0x80);
              remaining >>>= 7;
            }
            بایت_طول_آرایه.push(remaining);
            const lenBytes = new Uint8Array(بایت_طول_آرایه);
            const protobufLen = 1 + lenBytes.length + chunk.byteLength;
            const frame = new Uint8Array(5 + protobufLen);
            frame[0] = 0;
            frame[1] = (protobufLen >>> 24) & 0xff;
            frame[2] = (protobufLen >>> 16) & 0xff;
            frame[3] = (protobufLen >>> 8) & 0xff;
            frame[4] = protobufLen & 0xff;
            frame[5] = 0x0a;
            frame.set(lenBytes, 6);
            frame.set(chunk, 6 + lenBytes.length);
            ارسال_صف.push(frame);
            صف_بایت_داده += frame.byteLength;
            زمان_بندی_تازه_سازی_ارسال_صف();
          },
          close() {
            if (this.readyState === WebSocket.CLOSED) return;
            تازه_سازی_ارسال_صف(true);
            بسته_شده = true;
            this.readyState = WebSocket.CLOSED;
            try {
              controller.close();
            } catch (e) {}
          },
        };

        const تازه_سازی_ارسال_صف = (force = false) => {
          تازه_سازی_ریزکار_درصف_شده = false;
          if (تازه_سازی_زمان_سنج) {
            clearTimeout(تازه_سازی_زمان_سنج);
            تازه_سازی_زمان_سنج = null;
          }
          if ((!force && بسته_شده) || صف_بایت_داده === 0) return;
          const out = new Uint8Array(صف_بایت_داده);
          let offset = 0;
          for (const item of ارسال_صف) {
            out.set(item, offset);
            offset += item.byteLength;
          }
          ارسال_صف = [];
          صف_بایت_داده = 0;
          try {
            controller.enqueue(out);
          } catch (e) {
            بسته_شده = true;
            grpcBridge.readyState = WebSocket.CLOSED;
          }
        };

        const زمان_بندی_تازه_سازی_ارسال_صف = () => {
          if (صف_بایت_داده >= پایین_رو_انبار_سقف) {
            تازه_سازی_ارسال_صف();
            return;
          }
          if (تازه_سازی_ریزکار_درصف_شده || تازه_سازی_زمان_سنج) return;
          تازه_سازی_ریزکار_درصف_شده = true;
          queueMicrotask(() => {
            تازه_سازی_ریزکار_درصف_شده = false;
            if (بسته_شده || صف_بایت_داده === 0 || تازه_سازی_زمان_سنج) return;
            تازه_سازی_زمان_سنج = setTimeout(تازه_سازی_ارسال_صف, پایین_رو_فاصله_تازه_سازی);
          });
        };

        const بستن_اتصال = () => {
          if (بسته_شده) return;
          جی_آر_پی_سی_بالارو_نوشتن_صف?.[گشا("5riF56m6")]();
          منقضی_دور_اتصال();
          تازه_سازی_ارسال_صف(true);
          بسته_شده = true;
          grpcBridge.readyState = WebSocket.CLOSED;
          if (تازه_سازی_زمان_سنج) clearTimeout(تازه_سازی_زمان_سنج);
          if (دور_نویسنده) {
            try {
              دور_نویسنده.releaseLock();
            } catch (e) {}
            دور_نویسنده = null;
          }
          جاری_نوشتن_سوکت = null;
          try {
            reader.releaseLock();
          } catch (e) {}
          try {
            پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")]?.close();
          } catch (e) {}
          try {
            controller.close();
          } catch (e) {}
        };

        const آزادسازی_دور_نویسنده = () => {
          if (دور_نویسنده) {
            try {
              دور_نویسنده.releaseLock();
            } catch (e) {}
            دور_نویسنده = null;
          }
          جاری_نوشتن_سوکت = null;
        };

        const بالارو_نوشتن_صف = (جی_آر_پی_سی_بالارو_نوشتن_صف = ایجاد_بالارو_نوشتن_صف({
          [گشا("6I635Y+W5YaZ5YWl5Zmo")]: () => {
            const socket = remoteConnWrapper.socket;
            if (!socket) return null;
            if (socket !== جاری_نوشتن_سوکت) {
              آزادسازی_دور_نویسنده();
              جاری_نوشتن_سوکت = socket;
              دور_نویسنده = socket.writable.getWriter();
            }
            return دور_نویسنده;
          },
          [گشا("6I635Y+W6L+e5o6l5Lu75Yqh")]: () => remoteConnWrapper.connectingPromise,
          [گشا("6YeK5pS+5YaZ5YWl5Zmo")]: آزادسازی_دور_نویسنده,
          [گشا("6YeN6K+V6L+e5o6l")]: async () => {
            if (typeof remoteConnWrapper.retryConnect !== "function") throw new Error("retry unavailable");
            await remoteConnWrapper.retryConnect();
          },
          [گشا("5YWz6Zet6L+e5o6l")]: بستن_اتصال,
          [گشا("5ZCN56ew")]: گشا("Z1JQQ+S4iuihjA=="),
        }));

        const نوشتن_دور = async (payload, allowRetry = true) => {
          return بالارو_نوشتن_صف[گشا("5YaZ5YWl5bm2562J5b6F")](payload, allowRetry);
        };

        let ارجاع_شکست = false;
        try {
          let pending = new Uint8Array(0);
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (!value || value.byteLength === 0) continue;
            const جاری_ماژول = value instanceof Uint8Array ? value : new Uint8Array(value);
            const merged = new Uint8Array(pending.length + جاری_ماژول.length);
            merged.set(pending, 0);
            merged.set(جاری_ماژول, pending.length);
            pending = merged;
            while (pending.byteLength >= 5) {
              const grpcLen = ((pending[1] << 24) >>> 0) | (pending[2] << 16) | (pending[3] << 8) | pending[4];
              const frameSize = 5 + grpcLen;
              if (pending.byteLength < frameSize) break;
              const grpcPayload = pending.subarray(5, frameSize);
              pending = pending.slice(frameSize);
              if (!grpcPayload.byteLength) continue;
              let payload = grpcPayload;
              if (payload.byteLength >= 2 && payload[0] === 0x0a) {
                let shift = 0;
                let offset = 1;
                let عدد_متغیر_معتبر = false;
                while (offset < payload.length) {
                  const current = payload[offset++];
                  if ((current & 0x80) === 0) {
                    عدد_متغیر_معتبر = true;
                    break;
                  }
                  shift += 7;
                  if (shift > 35) break;
                }
                if (عدد_متغیر_معتبر) payload = payload.subarray(offset);
              }
              if (!payload.byteLength) continue;
              if (isDnsQuery) {
                if (تشخیص_آیا_است_پروتکل_دوم)
                  await ارجاع_پروتکل_دوم_یو_دی_پی_داده(payload, grpcBridge, پروتکل_دوم_یو_دی_پی_بستر, request);
                else await forwardataudp(payload, grpcBridge, null, request);
                continue;
              }
              if (remoteConnWrapper.socket || remoteConnWrapper.connectingPromise) {
                if (!(await نوشتن_دور(payload))) throw new Error("Remote socket is not ready");
              } else {
                const بسته_نخست_بایت = داده_تبدیل_آرایه_بایتی(payload);
                if (تشخیص_آیا_است_پروتکل_دوم === null)
                  تشخیص_آیا_است_پروتکل_دوم =
                    بسته_نخست_بایت.byteLength >= 58 && بسته_نخست_بایت[56] === 0x0d && بسته_نخست_بایت[57] === 0x0a;
                if (تشخیص_آیا_است_پروتکل_دوم) {
                  const تحلیل_نتیجه = تحلیل_پروتکل_دوم_درخواست(بسته_نخست_بایت, yourUUID);
                  if (تحلیل_نتیجه?.hasError)
                    throw new Error(تحلیل_نتیجه.message || گشا("SW52YWxpZCB0cm9qYW4gcmVxdWVzdA=="));
                  const { port, hostname, rawClientData, isUDP } = تحلیل_نتیجه;
                  log(
                    `${گشا("W2dSUENdIOacqOmprOmmluWMhTog")}${hostname}:${port} | UDP: ${isUDP ? گشا("5piv") : گشا("5ZCm")}`,
                  );
                  if (isSpeedTestSite(hostname) && میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] === null) {
                    grpcBridge.send(ساخت_محلی_204_پاسخ());
                    return;
                  }
                  if (isUDP) {
                    isDnsQuery = true;
                    پروتکل_دوم_یو_دی_پی_بستر[گشا("55uu5qCH5Li75py6")] = hostname;
                    پروتکل_دوم_یو_دی_پی_بستر[گشا("55uu5qCH56uv5Y+j")] = port;
                    if (پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5Luj5Zyw5Z2A")])
                      await ارجاع_پروتکل_دوم_یو_دی_پی_داده(
                        بسته_نخست_بایت,
                        grpcBridge,
                        پروتکل_دوم_یو_دی_پی_بستر,
                        request,
                      );
                    else if (معتبر_داده_طول(rawClientData) > 0)
                      await ارجاع_پروتکل_دوم_یو_دی_پی_داده(
                        rawClientData,
                        grpcBridge,
                        پروتکل_دوم_یو_دی_پی_بستر,
                        request,
                      );
                  } else {
                    await forwardataTCP(
                      hostname,
                      port,
                      rawClientData,
                      grpcBridge,
                      null,
                      remoteConnWrapper,
                      yourUUID,
                      request,
                      میانجی_برگشتی_بستر,
                      true,
                      بسته_نخست_بایت,
                    );
                  }
                } else {
                  تشخیص_آیا_است_پروتکل_دوم = false;
                  const تحلیل_نتیجه = تحلیل_پروتکل_نخست_درخواست(بسته_نخست_بایت, yourUUID);
                  if (تحلیل_نتیجه?.hasError)
                    throw new Error(تحلیل_نتیجه.message || گشا("SW52YWxpZCDprY/ng4jmgJ0gcmVxdWVzdA=="));
                  const { port, hostname, version, isUDP, rawClientData } = تحلیل_نتیجه;
                  log(
                    `${گشا("W2dSUENdIOmtj+eDiOaAnemmluWMhTog")}${hostname}:${port} | UDP: ${isUDP ? گشا("5piv") : گشا("5ZCm")}`,
                  );
                  const respHeader = new Uint8Array([version, 0]);
                  if (isSpeedTestSite(hostname) && میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] === null) {
                    grpcBridge.send(ساخت_محلی_204_پاسخ(respHeader));
                    return;
                  }
                  if (isUDP) {
                    if (port !== 53) throw new Error("UDP is not supported");
                    isDnsQuery = true;
                  }
                  grpcBridge.send(respHeader);
                  const rawData = rawClientData;
                  if (isDnsQuery) {
                    if (تشخیص_آیا_است_پروتکل_دوم)
                      await ارجاع_پروتکل_دوم_یو_دی_پی_داده(rawData, grpcBridge, پروتکل_دوم_یو_دی_پی_بستر, request);
                    else await forwardataudp(rawData, grpcBridge, null, request);
                  } else
                    await forwardataTCP(
                      hostname,
                      port,
                      rawData,
                      grpcBridge,
                      null,
                      remoteConnWrapper,
                      yourUUID,
                      request,
                      میانجی_برگشتی_بستر,
                    );
                }
              }
            }
            تازه_سازی_ارسال_صف();
          }
          await بالارو_نوشتن_صف[گشا("562J5b6F56m6")]();
        } catch (err) {
          ارجاع_شکست = true;
          log(`${گشا("W2dSUEPovazlj5FdIOWkhOeQhuWksei0pTog")}${err?.message || err}`);
        } finally {
          const نگه_داشتن_پروتکل_دوم_یو_دی_پی_میانجی_برگشتی_پایین_رو =
            !ارجاع_شکست &&
            isDnsQuery &&
            تشخیص_آیا_است_پروتکل_دوم &&
            پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5Luj5Zyw5Z2A")] &&
            پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")];
          if (نگه_داشتن_پروتکل_دوم_یو_دی_پی_میانجی_برگشتی_پایین_رو) {
            بالارو_نوشتن_صف[گشا("5riF56m6")]();
            منقضی_دور_اتصال();
            آزادسازی_دور_نویسنده();
            try {
              reader.releaseLock();
            } catch (e) {}
          } else {
            بستن_اتصال();
          }
        }
      },
      cancel() {
        جی_آر_پی_سی_بالارو_نوشتن_صف?.[گشا("5riF56m6")]();
        منقضی_دور_اتصال();
        try {
          پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")]?.close();
        } catch (e) {}
        try {
          reader.releaseLock();
        } catch (e) {}
      },
    }),
    { status: 200, headers: grpcHeaders },
  );
}

function است_معتبر_وب_سوکت_زودهنگام_داده(bytes, token) {
  if (!bytes?.byteLength) return false;
  if (bytes.byteLength >= 18 && شناسه_بایت_تطبیق(bytes, 1, token)) return true;
  if (bytes.byteLength < 58 || bytes[56] !== 0x0d || bytes[57] !== 0x0a) return false;

  const گذرواژه_پروتکل_دوم = sha224(token);
  for (let i = 0; i < 56; i++) {
    if (bytes[i] !== گذرواژه_پروتکل_دوم.charCodeAt(i)) return false;
  }
  return true;
}

function کدگشایی_وب_سوکت_زودهنگام_داده(header, token) {
  if (!header) return null;
  if (header.length > وب_سوکت_زودهنگام_داده_حداکثر_سرآیند_طول) throw new Error("early data is too large");

  let bytes;
  const Uint8ArrayBase64 = /**/ Uint8Array;
  if (typeof Uint8ArrayBase64.fromBase64 === "function") {
    try {
      bytes = Uint8ArrayBase64.fromBase64(header, { alphabet: "base64url" });
    } catch (_) {}
  }
  if (!bytes) {
    let normalized = header.replace(/-/g, "+").replace(/_/g, "/");
    const padding = normalized.length % 4;
    if (padding) normalized += "=".repeat(4 - padding);
    let binaryString;
    try {
      binaryString = atob(normalized);
    } catch (_) {
      return null;
    }
    bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
  }

  if (bytes.byteLength > وب_سوکت_زودهنگام_داده_حداکثر_بایت) throw new Error("early data is too large");
  return است_معتبر_وب_سوکت_زودهنگام_داده(bytes, token) ? bytes : null;
}

// ===== داده‌های انتقال وب‌سوکت =====
async function پردازش_وب_سوکت_درخواست(request, yourUUID, url, میانجی_برگشتی_بستر = {}) {
  const وب_سوکت_سوکت_جفت = new WebSocketPair();
  const [clientSock, serverSock] = Object.values(وب_سوکت_سوکت_جفت);
  try {
    /**/ serverSock.accept({ allowHalfOpen: true });
  } catch (_) {
    serverSock.accept();
  }
  serverSock.binaryType = "arraybuffer";
  let remoteConnWrapper = {
    socket: null,
    connectingPromise: null,
    retryConnect: null,
    downlinkDrain: Promise.resolve(),
  };
  const منقضی_دور_اتصال = () => منقضی_تی_سی_پی_اتصال_نسل(remoteConnWrapper);
  let isDnsQuery = false;
  let تشخیص_آیا_است_پروتکل_دوم = null;
  const پروتکل_دوم_یو_دی_پی_بستر = {
    [گشا("57yT5a2Y")]: new Uint8Array(0),
    [گشا("5Y+N5Luj5Zyw5Z2A")]: میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")],
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const لایه_امن_حالت_غیرفعال_داده_زودهنگام = !!url.searchParams.get("enc");
  let وب_سوکت_بالارو_نوشتن_صف = null;
  let وب_سوکت_انتقال_صریح_زنجیره = Promise.resolve();
  let وب_سوکت_انتقال_صریح_توقف_دریافت = false,
    وب_سوکت_انتقال_صریح_شکست = false,
    وب_سوکت_انتقال_صریح_پایان_درصف_شده = false;
  let وب_سوکت_صریح_صف_بایت = 0,
    وب_سوکت_صریح_صف_آیتم = 0;
  let تشخیص_پروتکل_نوع = null,
    جاری_نوشتن_سوکت = null,
    دور_نویسنده = null;
  let ss_بستر = null,
    ss_مقداردهی_وظیفه = null;
  let وب_سوکت_محلی_سنجش_سرعت_حالت = false,
    وب_سوکت_محلی_سنجش_سرعت_بازگشتی_سوکت = null;
  let وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار = new Uint8Array(0);
  let وب_سوکت_محلی_سنجش_سرعت_بسته_نخست_پاسخ_سرآیند = null;
  const وب_سوکت_محلی_سنجش_سرعت_درخواست_سقف = 64 * 1024;

  const ارسال_وب_سوکت_محلی_سنجش_سرعت_پاسخ = async () => {
    if (!وب_سوکت_محلی_سنجش_سرعت_بازگشتی_سوکت) return;
    const respHeader = وب_سوکت_محلی_سنجش_سرعت_بسته_نخست_پاسخ_سرآیند;
    وب_سوکت_محلی_سنجش_سرعت_بسته_نخست_پاسخ_سرآیند = null;
    await وب_سوکت_ارسال_و_انتظار(وب_سوکت_محلی_سنجش_سرعت_بازگشتی_سوکت, ساخت_وب_سوکت_محلی_204_پاسخ(respHeader));
  };

  const جستجو_اچ_تی_تی_پی_درخواست_سرآیند_پایان = (data) => {
    for (let i = 0; i <= data.byteLength - 4; i++) {
      if (data[i] === 0x0d && data[i + 1] === 0x0a && data[i + 2] === 0x0d && data[i + 3] === 0x0a) return i + 4;
    }
    return -1;
  };

  const پردازش_وب_سوکت_محلی_سنجش_سرعت_داده = async (data) => {
    const chunk = داده_تبدیل_آرایه_بایتی(data);
    if (!chunk.byteLength) return;
    if (وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار.byteLength + chunk.byteLength > وب_سوکت_محلی_سنجش_سرعت_درخواست_سقف)
      throw new Error("WS local speed-test request is too large");
    وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار = پیوند_بایت_داده(وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار, chunk);

    while (وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار.byteLength) {
      const headerEnd = جستجو_اچ_تی_تی_پی_درخواست_سرآیند_پایان(وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار);
      if (headerEnd === -1) return;
      const headerText = پروتکل_نخست_متن_کدگشا.decode(وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار.subarray(0, headerEnd));
      const contentLengthMatch = headerText.match(/(?:^|\r\n)content-length\s*:\s*(\d+)/i);
      const contentLength = contentLengthMatch ? Number(contentLengthMatch[1]) : 0;
      const requestLength = headerEnd + contentLength;
      if (!Number.isSafeInteger(contentLength) || requestLength > وب_سوکت_محلی_سنجش_سرعت_درخواست_سقف)
        throw new Error("WS local speed-test request body is too large");
      if (وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار.byteLength < requestLength) return;
      وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار = وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار.slice(requestLength);
      await ارسال_وب_سوکت_محلی_سنجش_سرعت_پاسخ();
    }
  };

  const فعال_وب_سوکت_محلی_سنجش_سرعت_حالت = async (بازگشتی_سوکت, respHeader = null, نخستین_درخواست_داده = null) => {
    وب_سوکت_محلی_سنجش_سرعت_حالت = true;
    وب_سوکت_محلی_سنجش_سرعت_بازگشتی_سوکت = بازگشتی_سوکت;
    وب_سوکت_محلی_سنجش_سرعت_درخواست_انبار = new Uint8Array(0);
    وب_سوکت_محلی_سنجش_سرعت_بسته_نخست_پاسخ_سرآیند = respHeader;
    if (معتبر_داده_طول(نخستین_درخواست_داده) > 0) await پردازش_وب_سوکت_محلی_سنجش_سرعت_داده(نخستین_درخواست_داده);
  };

  const آزادسازی_دور_نویسنده = () => {
    if (دور_نویسنده) {
      try {
        دور_نویسنده.releaseLock();
      } catch (e) {}
      دور_نویسنده = null;
    }
    جاری_نوشتن_سوکت = null;
  };

  const بالارو_نوشتن_صف = (وب_سوکت_بالارو_نوشتن_صف = ایجاد_بالارو_نوشتن_صف({
    [گشا("6I635Y+W5YaZ5YWl5Zmo")]: () => {
      const socket = remoteConnWrapper.socket;
      if (!socket) return null;
      if (socket !== جاری_نوشتن_سوکت) {
        آزادسازی_دور_نویسنده();
        جاری_نوشتن_سوکت = socket;
        دور_نویسنده = socket.writable.getWriter();
      }
      return دور_نویسنده;
    },
    [گشا("6I635Y+W6L+e5o6l5Lu75Yqh")]: () => remoteConnWrapper.connectingPromise,
    [گشا("6YeK5pS+5YaZ5YWl5Zmo")]: آزادسازی_دور_نویسنده,
    [گشا("6YeN6K+V6L+e5o6l")]: async () => {
      if (typeof remoteConnWrapper.retryConnect !== "function") throw new Error("retry unavailable");
      await remoteConnWrapper.retryConnect();
    },
    [گشا("5YWz6Zet6L+e5o6l")]: (err) => پردازش_وب_سوکت_انتقال_صریح_خطا(err),
    [گشا("5ZCN56ew")]: گشا("V1PkuIrooYw="),
  }));

  const نوشتن_دور = async (chunk, allowRetry = true) => {
    return بالارو_نوشتن_صف[گشا("5YaZ5YWl")](chunk, allowRetry);
  };

  const گرفتن_لایه_امن_بستر = async () => {
    if (ss_بستر) return ss_بستر;
    if (!ss_مقداردهی_وظیفه) {
      ss_مقداردهی_وظیفه = (async () => {
        const درخواست_رمزنگاری_روش = (url.searchParams.get("enc") || "").toLowerCase();
        const ترجیحی_رمزنگاری_پیکربندی =
          لایه_امن_پشتیبانی_رمزنگاری_پیکربندی[درخواست_رمزنگاری_روش] ||
          لایه_امن_پشتیبانی_رمزنگاری_پیکربندی["aes-128-gcm"];
        const ورودی_نامزد_رمزنگاری_پیکربندی = [
          ترجیحی_رمزنگاری_پیکربندی,
          ...Object.values(لایه_امن_پشتیبانی_رمزنگاری_پیکربندی).filter(
            (c) => c.method !== ترجیحی_رمزنگاری_پیکربندی.method,
          ),
        ];
        const ورودی_کلید_اصلی_وظیفه_انبار = new Map();
        const گرفتن_ورودی_کلید_اصلی_وظیفه = (config) => {
          if (!ورودی_کلید_اصلی_وظیفه_انبار.has(config.method))
            ورودی_کلید_اصلی_وظیفه_انبار.set(config.method, لایه_امن_اشتقاق_کلید_اصلی(yourUUID, config.keyLen));
          return ورودی_کلید_اصلی_وظیفه_انبار.get(config.method);
        };
        const ورودی_وضعیت = {
          buffer: new Uint8Array(0),
          hasSalt: false,
          waitPayloadLength: null,
          decryptKey: null,
          nonceCounter: new Uint8Array(یکتای_لایه_امن_طول),
          [گشا("5Yqg5a+G6YWN572u")]: null,
        };
        const مقداردهی_ورودی_رمزگشایی_وضعیت = async () => {
          const lengthCipherTotalLength = 2 + رمز_لایه_امن_برچسب_طول;
          const حداکثر_نمک_طول = Math.max(...ورودی_نامزد_رمزنگاری_پیکربندی.map((c) => c.saltLen));
          const حداکثر_هم_تراز_اسکن_بایت = 16;
          const قابل_اسکن_حداکثر_جابه_جایی = Math.min(
            حداکثر_هم_تراز_اسکن_بایت,
            Math.max(
              0,
              ورودی_وضعیت.buffer.byteLength -
                (lengthCipherTotalLength + Math.min(...ورودی_نامزد_رمزنگاری_پیکربندی.map((c) => c.saltLen))),
            ),
          );
          for (let offset = 0; offset <= قابل_اسکن_حداکثر_جابه_جایی; offset++) {
            for (const رمزنگاری_پیکربندی of ورودی_نامزد_رمزنگاری_پیکربندی) {
              const مقداردهی_حداقل_طول = offset + رمزنگاری_پیکربندی.saltLen + lengthCipherTotalLength;
              if (ورودی_وضعیت.buffer.byteLength < مقداردهی_حداقل_طول) continue;
              const salt = ورودی_وضعیت.buffer.subarray(offset, offset + رمزنگاری_پیکربندی.saltLen);
              const lengthCipher = ورودی_وضعیت.buffer.subarray(offset + رمزنگاری_پیکربندی.saltLen, مقداردهی_حداقل_طول);
              const masterKey = await گرفتن_ورودی_کلید_اصلی_وظیفه(رمزنگاری_پیکربندی);
              const decryptKey = await لایه_امن_اشتقاق_کلید_نشست(رمزنگاری_پیکربندی, masterKey, salt, ["decrypt"]);
              const nonceCounter = new Uint8Array(یکتای_لایه_امن_طول);
              try {
                const lengthPlain = await رمز_لایه_امن_رمزگشایی(decryptKey, nonceCounter, lengthCipher);
                if (lengthPlain.byteLength !== 2) continue;
                const payloadLength = (lengthPlain[0] << 8) | lengthPlain[1];
                if (payloadLength < 0 || payloadLength > رمزنگاری_پیکربندی.maxChunk) continue;
                if (offset > 0)
                  log(
                    `${گشا("W1NT5YWl56uZXSDmo4DmtYvliLDliY3lr7zlmarlo7Ag")}${offset}${گشا("Qu+8jOW3suiHquWKqOWvuem9kA==")}`,
                  );
                if (رمزنگاری_پیکربندی.method !== ترجیحی_رمزنگاری_پیکربندی.method)
                  log(
                    `${گشا("W1NT5YWl56uZXSBVUkwgZW5jPQ==")}${درخواست_رمزنگاری_روش || ترجیحی_رمزنگاری_پیکربندی.method}${گشا("IOS4juWunumZhSA=")}${رمزنگاری_پیکربندی.method}${گشا("IOS4jeS4gOiHtO+8jOW3suiHquWKqOWIh+aNog==")}`,
                  );
                ورودی_وضعیت.buffer = ورودی_وضعیت.buffer.subarray(مقداردهی_حداقل_طول);
                ورودی_وضعیت.decryptKey = decryptKey;
                ورودی_وضعیت.nonceCounter = nonceCounter;
                ورودی_وضعیت.waitPayloadLength = payloadLength;
                ورودی_وضعیت[گشا("5Yqg5a+G6YWN572u")] = رمزنگاری_پیکربندی;
                ورودی_وضعیت.hasSalt = true;
                return true;
              } catch (_) {}
            }
          }
          const مقداردهی_شکست_تشخیص_طول = حداکثر_نمک_طول + lengthCipherTotalLength + حداکثر_هم_تراز_اسکن_بایت;
          if (ورودی_وضعیت.buffer.byteLength >= مقداردهی_شکست_تشخیص_طول) {
            throw new Error(
              `${گشا("U1MgaGFuZHNoYWtlIGRlY3J5cHQgZmFpbGVkIChlbmM9")}${درخواست_رمزنگاری_روش || "auto"}, candidates=${ورودی_نامزد_رمزنگاری_پیکربندی.map((c) => c.method).join("/")})`,
            );
          }
          return false;
        };
        const ورودی_رمزگشا = {
          async [گشا("6L6T5YWl")](dataChunk) {
            const chunk = داده_تبدیل_آرایه_بایتی(dataChunk);
            if (chunk.byteLength > 0) ورودی_وضعیت.buffer = پیوند_بایت_داده(ورودی_وضعیت.buffer, chunk);
            if (!ورودی_وضعیت.hasSalt) {
              const مقداردهی_شدن_عملکرد = await مقداردهی_ورودی_رمزگشایی_وضعیت();
              if (!مقداردهی_شدن_عملکرد) return [];
            }
            const plaintextChunks = [];
            while (true) {
              if (ورودی_وضعیت.waitPayloadLength === null) {
                const lengthCipherTotalLength = 2 + رمز_لایه_امن_برچسب_طول;
                if (ورودی_وضعیت.buffer.byteLength < lengthCipherTotalLength) break;
                const lengthCipher = ورودی_وضعیت.buffer.subarray(0, lengthCipherTotalLength);
                ورودی_وضعیت.buffer = ورودی_وضعیت.buffer.subarray(lengthCipherTotalLength);
                const lengthPlain = await رمز_لایه_امن_رمزگشایی(
                  ورودی_وضعیت.decryptKey,
                  ورودی_وضعیت.nonceCounter,
                  lengthCipher,
                );
                if (lengthPlain.byteLength !== 2) throw new Error(گشا("U1MgbGVuZ3RoIGRlY3J5cHQgZmFpbGVk"));
                const payloadLength = (lengthPlain[0] << 8) | lengthPlain[1];
                if (payloadLength < 0 || payloadLength > ورودی_وضعیت[گشا("5Yqg5a+G6YWN572u")].maxChunk)
                  throw new Error(`${گشا("U1MgcGF5bG9hZCBsZW5ndGggaW52YWxpZDog")}${payloadLength}`);
                ورودی_وضعیت.waitPayloadLength = payloadLength;
              }
              const payloadCipherTotalLength = ورودی_وضعیت.waitPayloadLength + رمز_لایه_امن_برچسب_طول;
              if (ورودی_وضعیت.buffer.byteLength < payloadCipherTotalLength) break;
              const payloadCipher = ورودی_وضعیت.buffer.subarray(0, payloadCipherTotalLength);
              ورودی_وضعیت.buffer = ورودی_وضعیت.buffer.subarray(payloadCipherTotalLength);
              const payloadPlain = await رمز_لایه_امن_رمزگشایی(
                ورودی_وضعیت.decryptKey,
                ورودی_وضعیت.nonceCounter,
                payloadCipher,
              );
              plaintextChunks.push(payloadPlain);
              ورودی_وضعیت.waitPayloadLength = null;
            }
            return plaintextChunks;
          },
        };
        let خروجی_رمزکننده = null;
        const لایه_امن_تک_دسته_حداکثر_بایت = 32 * 1024;
        const گرفتن_خروجی_رمزکننده = async () => {
          if (خروجی_رمزکننده) return خروجی_رمزکننده;
          if (!ورودی_وضعیت[گشا("5Yqg5a+G6YWN572u")]) throw new Error(گشا("U1MgY2lwaGVyIGlzIG5vdCBuZWdvdGlhdGVk"));
          const خروجی_رمزنگاری_پیکربندی = ورودی_وضعیت[گشا("5Yqg5a+G6YWN572u")];
          const خروجی_کلید_اصلی = await لایه_امن_اشتقاق_کلید_اصلی(yourUUID, خروجی_رمزنگاری_پیکربندی.keyLen);
          const خروجی_تصادفی_بایت = crypto.getRandomValues(new Uint8Array(خروجی_رمزنگاری_پیکربندی.saltLen));
          const خروجی_رمزنگاری_کلید = await لایه_امن_اشتقاق_کلید_نشست(
            خروجی_رمزنگاری_پیکربندی,
            خروجی_کلید_اصلی,
            خروجی_تصادفی_بایت,
            ["encrypt"],
          );
          const خروجی_یکتا_شمارنده = new Uint8Array(یکتای_لایه_امن_طول);
          let تصادفی_بایت_ارسال_شده = false;
          خروجی_رمزکننده = {
            async [گشا("5Yqg5a+G5bm25Y+R6YCB")](dataChunk, sendChunk) {
              const plaintextData = داده_تبدیل_آرایه_بایتی(dataChunk);
              if (!تصادفی_بایت_ارسال_شده) {
                await sendChunk(خروجی_تصادفی_بایت);
                تصادفی_بایت_ارسال_شده = true;
              }
              if (plaintextData.byteLength === 0) return;
              let offset = 0;
              while (offset < plaintextData.byteLength) {
                const end = Math.min(offset + خروجی_رمزنگاری_پیکربندی.maxChunk, plaintextData.byteLength);
                const payloadPlain = plaintextData.subarray(offset, end);
                const lengthPlain = new Uint8Array(2);
                lengthPlain[0] = (payloadPlain.byteLength >>> 8) & 0xff;
                lengthPlain[1] = payloadPlain.byteLength & 0xff;
                const lengthCipher = await رمز_لایه_امن_رمزنگاری(خروجی_رمزنگاری_کلید, خروجی_یکتا_شمارنده, lengthPlain);
                const payloadCipher = await رمز_لایه_امن_رمزنگاری(
                  خروجی_رمزنگاری_کلید,
                  خروجی_یکتا_شمارنده,
                  payloadPlain,
                );
                const frame = new Uint8Array(lengthCipher.byteLength + payloadCipher.byteLength);
                frame.set(lengthCipher, 0);
                frame.set(payloadCipher, lengthCipher.byteLength);
                await sendChunk(frame);
                offset = end;
              }
            },
          };
          return خروجی_رمزکننده;
        };
        let لایه_امن_ارسال_صف = Promise.resolve();
        const لایه_امن_ورود_به_صف_ارسال = (chunk) => {
          لایه_امن_ارسال_صف = لایه_امن_ارسال_صف
            .then(async () => {
              if (serverSock.readyState !== WebSocket.OPEN) return;
              const مقداردهی_شده_خروجی_رمزکننده = await گرفتن_خروجی_رمزکننده();
              await مقداردهی_شده_خروجی_رمزکننده[گشا("5Yqg5a+G5bm25Y+R6YCB")](chunk, async (encryptedChunk) => {
                if (encryptedChunk.byteLength > 0 && serverSock.readyState === WebSocket.OPEN) {
                  await وب_سوکت_ارسال_و_انتظار(serverSock, encryptedChunk.buffer);
                }
              });
            })
            .catch((error) => {
              log(`${گشا("W1NT5Y+R6YCBXSDliqDlr4blpLHotKU6IA==")}${error?.message || error}`);
              closeSocketQuietly(serverSock);
            });
          return لایه_امن_ارسال_صف;
        };
        const بازگشتی_سوکت = {
          get readyState() {
            return serverSock.readyState;
          },
          send(data) {
            const chunk = داده_تبدیل_آرایه_بایتی(data);
            if (chunk.byteLength <= لایه_امن_تک_دسته_حداکثر_بایت) {
              return لایه_امن_ورود_به_صف_ارسال(chunk);
            }
            for (let i = 0; i < chunk.byteLength; i += لایه_امن_تک_دسته_حداکثر_بایت) {
              لایه_امن_ورود_به_صف_ارسال(
                chunk.subarray(i, Math.min(i + لایه_امن_تک_دسته_حداکثر_بایت, chunk.byteLength)),
              );
            }
            return لایه_امن_ارسال_صف;
          },
          close() {
            closeSocketQuietly(serverSock);
          },
        };
        ss_بستر = {
          [گشا("5YWl56uZ6Kej5a+G5Zmo")]: ورودی_رمزگشا,
          [گشا("5Zue5YyFU29ja2V0")]: بازگشتی_سوکت,
          [گشا("6aaW5YyF5bey5bu656uL")]: false,
          [گشا("55uu5qCH5Li75py6")]: "",
          [گشا("55uu5qCH56uv5Y+j")]: 0,
        };
        return ss_بستر;
      })().finally(() => {
        ss_مقداردهی_وظیفه = null;
      });
    }
    return ss_مقداردهی_وظیفه;
  };

  const پردازش_لایه_امن_داده = async (chunk) => {
    const بستر = await گرفتن_لایه_امن_بستر();
    let متن_روشن_ماژول_آرایه = null;
    try {
      متن_روشن_ماژول_آرایه = await بستر[گشا("5YWl56uZ6Kej5a+G5Zmo")][گشا("6L6T5YWl")](chunk);
    } catch (err) {
      const msg = err?.message || `${err}`;
      if (
        msg.includes("Decryption failed") ||
        msg.includes(گشا("U1MgaGFuZHNoYWtlIGRlY3J5cHQgZmFpbGVk")) ||
        msg.includes(گشا("U1MgbGVuZ3RoIGRlY3J5cHQgZmFpbGVk"))
      ) {
        log(`${گشا("W1NT5YWl56uZXSDop6Plr4blpLHotKXvvIzov57mjqXlhbPpl606IA==")}${msg}`);
        closeSocketQuietly(serverSock);
        return;
      }
      throw err;
    }
    for (const متن_روشن_ماژول of متن_روشن_ماژول_آرایه) {
      if (وب_سوکت_محلی_سنجش_سرعت_حالت) {
        await پردازش_وب_سوکت_محلی_سنجش_سرعت_داده(متن_روشن_ماژول);
        continue;
      }
      let نوشته_شده = false;
      try {
        نوشته_شده = await نوشتن_دور(متن_روشن_ماژول, false);
      } catch (err) {
        if (/**/ err?.isQueueOverflow) throw err;
        نوشته_شده = false;
      }
      if (نوشته_شده) continue;
      if (بستر[گشا("6aaW5YyF5bey5bu656uL")] && بستر[گشا("55uu5qCH5Li75py6")] && بستر[گشا("55uu5qCH56uv5Y+j")] > 0) {
        await forwardataTCP(
          بستر[گشا("55uu5qCH5Li75py6")],
          بستر[گشا("55uu5qCH56uv5Y+j")],
          متن_روشن_ماژول,
          بستر[گشا("5Zue5YyFU29ja2V0")],
          null,
          remoteConnWrapper,
          yourUUID,
          request,
          میانجی_برگشتی_بستر,
        );
        continue;
      }
      const متن_روشن_داده = داده_تبدیل_آرایه_بایتی(متن_روشن_ماژول);
      if (متن_روشن_داده.byteLength < 3) throw new Error(گشا("aW52YWxpZCBzcyBkYXRh"));
      const addressType = متن_روشن_داده[0];
      let cursor = 1;
      let hostname = "";
      if (addressType === 1) {
        if (متن_روشن_داده.byteLength < cursor + 4 + 2) throw new Error(گشا("aW52YWxpZCBzcyBpcHY0IGxlbmd0aA=="));
        hostname = `${متن_روشن_داده[cursor]}.${متن_روشن_داده[cursor + 1]}.${متن_روشن_داده[cursor + 2]}.${متن_روشن_داده[cursor + 3]}`;
        cursor += 4;
      } else if (addressType === 3) {
        if (متن_روشن_داده.byteLength < cursor + 1) throw new Error(گشا("aW52YWxpZCBzcyBkb21haW4gbGVuZ3Ro"));
        const domainLength = متن_روشن_داده[cursor];
        cursor += 1;
        if (متن_روشن_داده.byteLength < cursor + domainLength + 2)
          throw new Error(گشا("aW52YWxpZCBzcyBkb21haW4gZGF0YQ=="));
        hostname = لایه_امن_متن_کدگشا.decode(متن_روشن_داده.subarray(cursor, cursor + domainLength));
        cursor += domainLength;
      } else if (addressType === 4) {
        if (متن_روشن_داده.byteLength < cursor + 16 + 2) throw new Error(گشا("aW52YWxpZCBzcyBpcHY2IGxlbmd0aA=="));
        const ipv6 = [];
        const ipv6View = new DataView(متن_روشن_داده.buffer, متن_روشن_داده.byteOffset + cursor, 16);
        for (let i = 0; i < 8; i++) ipv6.push(ipv6View.getUint16(i * 2).toString(16));
        hostname = ipv6.join(":");
        cursor += 16;
      } else {
        throw new Error(`${گشا("aW52YWxpZCBzcyBhZGRyZXNzVHlwZTog")}${addressType}`);
      }
      if (!hostname) throw new Error(`${گشا("aW52YWxpZCBzcyBhZGRyZXNzOiA=")}${addressType}`);
      const port = (متن_روشن_داده[cursor] << 8) | متن_روشن_داده[cursor + 1];
      cursor += 2;
      const rawClientData = متن_روشن_داده.subarray(cursor);
      if (isSpeedTestSite(hostname) && میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] === null) {
        await فعال_وب_سوکت_محلی_سنجش_سرعت_حالت(بستر[گشا("5Zue5YyFU29ja2V0")], null, rawClientData);
        return;
      }
      بستر[گشا("6aaW5YyF5bey5bu656uL")] = true;
      بستر[گشا("55uu5qCH5Li75py6")] = hostname;
      بستر[گشا("55uu5qCH56uv5Y+j")] = port;
      await forwardataTCP(
        hostname,
        port,
        rawClientData,
        بستر[گشا("5Zue5YyFU29ja2V0")],
        null,
        remoteConnWrapper,
        yourUUID,
        request,
        میانجی_برگشتی_بستر,
      );
    }
  };

  const پردازش_وب_سوکت_ورودی_داده = async (chunk) => {
    let جاری_ماژول_بایت = null;
    if (isDnsQuery) {
      if (تشخیص_آیا_است_پروتکل_دوم)
        return await ارجاع_پروتکل_دوم_یو_دی_پی_داده(chunk, serverSock, پروتکل_دوم_یو_دی_پی_بستر, request);
      return await forwardataudp(chunk, serverSock, null, request);
    }
    if (تشخیص_پروتکل_نوع === گشا("c3M=")) {
      await پردازش_لایه_امن_داده(chunk);
      return;
    }
    if (وب_سوکت_محلی_سنجش_سرعت_حالت) {
      await پردازش_وب_سوکت_محلی_سنجش_سرعت_داده(chunk);
      return;
    }
    if (await نوشتن_دور(chunk)) return;

    if (تشخیص_پروتکل_نوع === null) {
      if (url.searchParams.get("enc")) تشخیص_پروتکل_نوع = گشا("c3M=");
      else {
        جاری_ماژول_بایت = جاری_ماژول_بایت || داده_تبدیل_آرایه_بایتی(chunk);
        const bytes = جاری_ماژول_بایت;
        تشخیص_پروتکل_نوع =
          bytes.byteLength >= 58 && bytes[56] === 0x0d && bytes[57] === 0x0a ? گشا("5pyo6ams") : گشا("6a2P54OI5oCd");
      }
      تشخیص_آیا_است_پروتکل_دوم = تشخیص_پروتکل_نوع === گشا("5pyo6ams");
      log(
        `${گشا("W1dT6L2s5Y+RXSDljY/orq7nsbvlnos6IA==")}${تشخیص_پروتکل_نوع}${گشا("IHwg5p2l6IeqOiA=")}${url.host} | UA: ${request.headers.get("user-agent") || گشا("5pyq55+l")}`,
      );
    }

    if (تشخیص_پروتکل_نوع === گشا("c3M=")) {
      await پردازش_لایه_امن_داده(chunk);
      return;
    }
    if (await نوشتن_دور(chunk)) return;
    if (تشخیص_پروتکل_نوع === گشا("5pyo6ams")) {
      const تحلیل_نتیجه = تحلیل_پروتکل_دوم_درخواست(chunk, yourUUID);
      if (تحلیل_نتیجه?.hasError) throw new Error(تحلیل_نتیجه.message || گشا("SW52YWxpZCB0cm9qYW4gcmVxdWVzdA=="));
      const { port, hostname, rawClientData, isUDP } = تحلیل_نتیجه;
      if (isSpeedTestSite(hostname) && میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] === null) {
        await فعال_وب_سوکت_محلی_سنجش_سرعت_حالت(serverSock, null, rawClientData);
        return;
      }
      if (isUDP) {
        isDnsQuery = true;
        پروتکل_دوم_یو_دی_پی_بستر[گشا("55uu5qCH5Li75py6")] = hostname;
        پروتکل_دوم_یو_دی_پی_بستر[گشا("55uu5qCH56uv5Y+j")] = port;
        if (پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5Luj5Zyw5Z2A")])
          return ارجاع_پروتکل_دوم_یو_دی_پی_داده(
            جاری_ماژول_بایت || داده_تبدیل_آرایه_بایتی(chunk),
            serverSock,
            پروتکل_دوم_یو_دی_پی_بستر,
            request,
          );
        if (معتبر_داده_طول(rawClientData) > 0)
          return ارجاع_پروتکل_دوم_یو_دی_پی_داده(rawClientData, serverSock, پروتکل_دوم_یو_دی_پی_بستر, request);
        return;
      }
      await forwardataTCP(
        hostname,
        port,
        rawClientData,
        serverSock,
        null,
        remoteConnWrapper,
        yourUUID,
        request,
        میانجی_برگشتی_بستر,
        true,
        جاری_ماژول_بایت || داده_تبدیل_آرایه_بایتی(chunk),
      );
    } else {
      تشخیص_آیا_است_پروتکل_دوم = false;
      جاری_ماژول_بایت = جاری_ماژول_بایت || داده_تبدیل_آرایه_بایتی(chunk);
      const bytes = جاری_ماژول_بایت;
      const تحلیل_نتیجه = تحلیل_پروتکل_نخست_درخواست(bytes, yourUUID);
      if (تحلیل_نتیجه?.hasError) throw new Error(تحلیل_نتیجه.message || گشا("SW52YWxpZCDprY/ng4jmgJ0gcmVxdWVzdA=="));
      const { port, hostname, version, isUDP, rawClientData } = تحلیل_نتیجه;
      const respHeader = new Uint8Array([version, 0]);
      if (isSpeedTestSite(hostname) && میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] === null) {
        await فعال_وب_سوکت_محلی_سنجش_سرعت_حالت(serverSock, respHeader, rawClientData);
        return;
      }
      if (isUDP) {
        if (port === 53) isDnsQuery = true;
        else throw new Error("UDP is not supported");
      }
      const rawData = rawClientData;
      if (isDnsQuery) {
        if (تشخیص_آیا_است_پروتکل_دوم)
          return ارجاع_پروتکل_دوم_یو_دی_پی_داده(rawData, serverSock, پروتکل_دوم_یو_دی_پی_بستر, request);
        return forwardataudp(rawData, serverSock, respHeader, request);
      }
      await forwardataTCP(
        hostname,
        port,
        rawData,
        serverSock,
        respHeader,
        remoteConnWrapper,
        yourUUID,
        request,
        میانجی_برگشتی_بستر,
      );
    }
  };

  const پردازش_وب_سوکت_انتقال_صریح_خطا = (err) => {
    if (وب_سوکت_انتقال_صریح_شکست) return;
    وب_سوکت_انتقال_صریح_شکست = true;
    وب_سوکت_انتقال_صریح_توقف_دریافت = true;
    وب_سوکت_صریح_صف_بایت = 0;
    وب_سوکت_صریح_صف_آیتم = 0;
    const msg = err?.message || `${err}`;
    if (msg.includes("Network connection lost") || msg.includes("ReadableStream is closed")) {
      log(`${گشا("W1dT6L2s5Y+RXSDov57mjqXnu5PmnZ86IA==")}${msg}`);
    } else {
      log(`${گشا("W1dT6L2s5Y+RXSDlpITnkIblpLHotKU6IA==")}${msg}`);
    }
    بالارو_نوشتن_صف[گشا("5riF56m6")]();
    آزادسازی_دور_نویسنده();
    منقضی_دور_اتصال();
    try {
      پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")]?.close();
    } catch (e) {}
    closeSocketQuietly(serverSock);
  };

  const افزودن_وب_سوکت_انتقال_صریح_وظیفه = (وظیفه) => {
    وب_سوکت_انتقال_صریح_زنجیره = وب_سوکت_انتقال_صریح_زنجیره.then(وظیفه).catch(پردازش_وب_سوکت_انتقال_صریح_خطا);
    return وب_سوکت_انتقال_صریح_زنجیره;
  };

  const ورود_به_صف_وب_سوکت_انتقال_صریح = (data) => {
    if (وب_سوکت_انتقال_صریح_توقف_دریافت || وب_سوکت_انتقال_صریح_شکست) return;
    const chunkSize = Math.max(0, معتبر_داده_طول(data));
    const nextBytes = وب_سوکت_صریح_صف_بایت + chunkSize;
    const nextItems = وب_سوکت_صریح_صف_آیتم + 1;
    if (nextBytes > بالارو_صف_حداکثر_بایت || nextItems > بالارو_صف_حداکثر_آیتم) {
      پردازش_وب_سوکت_انتقال_صریح_خطا(
        new Error(`${گشا("W1dT5pi+5byP5Lyg6L6TXSDpmJ/liJfmuqLlh7o6IA==")}${nextBytes}B/${nextItems}`),
      );
      return;
    }
    وب_سوکت_صریح_صف_بایت = nextBytes;
    وب_سوکت_صریح_صف_آیتم = nextItems;
    افزودن_وب_سوکت_انتقال_صریح_وظیفه(async () => {
      وب_سوکت_صریح_صف_بایت = Math.max(0, وب_سوکت_صریح_صف_بایت - chunkSize);
      وب_سوکت_صریح_صف_آیتم = Math.max(0, وب_سوکت_صریح_صف_آیتم - 1);
      if (وب_سوکت_انتقال_صریح_شکست) return;
      await پردازش_وب_سوکت_ورودی_داده(data);
    });
  };

  const پایان_وب_سوکت_انتقال_صریح = () => {
    if (وب_سوکت_انتقال_صریح_پایان_درصف_شده) return;
    وب_سوکت_انتقال_صریح_پایان_درصف_شده = true;
    وب_سوکت_انتقال_صریح_توقف_دریافت = true;
    افزودن_وب_سوکت_انتقال_صریح_وظیفه(async () => {
      if (وب_سوکت_انتقال_صریح_شکست) return;
      await بالارو_نوشتن_صف[گشا("562J5b6F56m6")]();
      آزادسازی_دور_نویسنده();
      منقضی_دور_اتصال();
      try {
        پروتکل_دوم_یو_دی_پی_بستر[گشا("5Y+N5LujU29ja2V0")]?.close();
      } catch (e) {}
    });
  };

  serverSock.addEventListener("message", (event) => {
    ورود_به_صف_وب_سوکت_انتقال_صریح(event.data);
  });
  serverSock.addEventListener("close", () => {
    closeSocketQuietly(serverSock);
    پایان_وب_سوکت_انتقال_صریح();
  });
  serverSock.addEventListener("error", (err) => {
    پردازش_وب_سوکت_انتقال_صریح_خطا(err);
  });

  //
  if (!لایه_امن_حالت_غیرفعال_داده_زودهنگام && earlyDataHeader) {
    try {
      const bytes = کدگشایی_وب_سوکت_زودهنگام_داده(earlyDataHeader, yourUUID);
      if (bytes?.byteLength) ورود_به_صف_وب_سوکت_انتقال_صریح(bytes.buffer);
    } catch (error) {
      پردازش_وب_سوکت_انتقال_صریح_خطا(error);
    }
  }

  return new Response(null, { status: 101, webSocket: clientSock, headers: { "Sec-WebSocket-Extensions": "" } });
}

const پروتکل_دوم_متن_کدگشا = new TextDecoder();

function تحلیل_پروتکل_دوم_میانجی_برگشتی_نشانی(address) {
  const raw = String(address || "").trim();
  if (!raw || raw.includes("/") || raw.includes("@") || raw.includes("://"))
    throw new Error(گشا("5pyo6ams5Y+N5Luj5LuF5pSv5oyBIGhvc3Q6cG9ydA=="));
  let hostname = "",
    portText = "";
  if (raw.startsWith("[")) {
    const تطبیق = raw.match(/^(\[[^\]]+\]):(\d+)$/);
    if (!تطبیق) throw new Error(گشا("5peg5pWI55qEIElQdjYg5pyo6ams5Y+N5Luj5Zyw5Z2A"));
    hostname = تطبیق[1];
    portText = تطبیق[2];
  } else {
    const parts = raw.split(":");
    if (parts.length !== 2) throw new Error(گشا("5pyo6ams5Y+N5Luj5LuF5pSv5oyBIGhvc3Q6cG9ydA=="));
    hostname = parts[0];
    portText = parts[1];
  }
  const port = Number(portText);
  if (!hostname || !Number.isInteger(port) || port < 1 || port > 65535)
    throw new Error(گشا("5peg5pWI55qE5pyo6ams5Y+N5Luj56uv5Y+j"));
  return { hostname, port };
}

async function اتصال_پروتکل_دوم_میانجی_برگشتی(بسته_نخست_داده, تی_سی_پی_اتصال, پروتکل_دوم_میانجی_برگشتی_هدف) {
  if (!پروتکل_دوم_میانجی_برگشتی_هدف) throw new Error(گشا("dHJvamFuIGZhbGxiYWNrIGlzIG5vdCBjb25maWd1cmVk"));
  const socket = تی_سی_پی_اتصال({
    hostname: stripIPv6Brackets(پروتکل_دوم_میانجی_برگشتی_هدف.hostname),
    port: پروتکل_دوم_میانجی_برگشتی_هدف.port,
  });
  let writer = null;
  try {
    if (socket.opened) await socket.opened;
    if (معتبر_داده_طول(بسته_نخست_داده) > 0) {
      writer = socket.writable.getWriter();
      await writer.write(داده_تبدیل_آرایه_بایتی(بسته_نخست_داده));
    }
    return socket;
  } catch (error) {
    try {
      socket?.close?.();
    } catch (e) {}
    throw error;
  } finally {
    try {
      writer?.releaseLock();
    } catch (e) {}
  }
}

function استخراج_پروتکل_دوم_میانجی_برگشتی_دست_دادن_داده(بسته_نخست_داده, rawData) {
  const بسته_نخست = داده_تبدیل_آرایه_بایتی(بسته_نخست_داده);
  const payload = داده_تبدیل_آرایه_بایتی(rawData);
  if (!payload.byteLength) return بسته_نخست;
  const دست_دادن_طول = بسته_نخست.byteLength - payload.byteLength;
  if (دست_دادن_طول <= 0) return بسته_نخست;
  for (let i = 0; i < payload.byteLength; i++) {
    if (بسته_نخست[دست_دادن_طول + i] !== payload[i]) return بسته_نخست;
  }
  return بسته_نخست.subarray(0, دست_دادن_طول);
}

async function ارجاع_پروتکل_دوم_یو_دی_پی_میانجی_برگشتی_داده(chunk, webSocket, بستر, request) {
  const data = داده_تبدیل_آرایه_بایتی(chunk);
  if (!بستر[گشا("5Y+N5LujU29ja2V0")]) {
    const تی_سی_پی_اتصال = ایجاد_درخواست_تی_سی_پی_اتصال_دهنده(request);
    const socket = await اتصال_پروتکل_دوم_میانجی_برگشتی(data, تی_سی_پی_اتصال, بستر[گشا("5Y+N5Luj5Zyw5Z2A")]);
    بستر[گشا("5Y+N5LujU29ja2V0")] = socket;
    socket.closed.catch(() => {}).finally(() => closeSocketQuietly(webSocket));
    connectStreams(socket, webSocket, null, null);
    return;
  }
  if (!data.byteLength) return;
  const writer = بستر[گشا("5Y+N5LujU29ja2V0")].writable.getWriter();
  try {
    await writer.write(data);
  } finally {
    try {
      writer.releaseLock();
    } catch (e) {}
  }
}

function تحلیل_پروتکل_دوم_درخواست(buffer, passwordPlainText) {
  const data = داده_تبدیل_آرایه_بایتی(buffer);
  const sha224Password = sha224(passwordPlainText);
  if (data.byteLength < 58) return { hasError: true, message: "invalid data" };
  let crLfIndex = 56;
  if (data[crLfIndex] !== 0x0d || data[crLfIndex + 1] !== 0x0a)
    return { hasError: true, message: "invalid header format" };
  for (let i = 0; i < crLfIndex; i++) {
    if (data[i] !== sha224Password.charCodeAt(i)) return { hasError: true, message: "invalid password" };
  }

  const نمایه_میانجی = crLfIndex + 2;
  if (data.byteLength < نمایه_میانجی + 6) return { hasError: true, message: "invalid S5 request data" };

  const cmd = data[نمایه_میانجی];
  if (cmd !== 1 && cmd !== 3) return { hasError: true, message: "unsupported command, only TCP/UDP is allowed" };
  const isUDP = cmd === 3;

  const atype = data[نمایه_میانجی + 1];
  let addressLength = 0;
  let addressIndex = نمایه_میانجی + 2;
  let address = "";
  switch (atype) {
    case 1: //
      addressLength = 4;
      if (data.byteLength < addressIndex + addressLength + 4)
        return { hasError: true, message: "invalid S5 request data" };
      address = `${data[addressIndex]}.${data[addressIndex + 1]}.${data[addressIndex + 2]}.${data[addressIndex + 3]}`;
      break;
    case 3: //
      if (data.byteLength < addressIndex + 1) return { hasError: true, message: "invalid S5 request data" };
      addressLength = data[addressIndex];
      addressIndex += 1;
      if (data.byteLength < addressIndex + addressLength + 4)
        return { hasError: true, message: "invalid S5 request data" };
      address = پروتکل_دوم_متن_کدگشا.decode(data.subarray(addressIndex, addressIndex + addressLength));
      break;
    case 4: //
      addressLength = 16;
      if (data.byteLength < addressIndex + addressLength + 4)
        return { hasError: true, message: "invalid S5 request data" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const partIndex = addressIndex + i * 2;
        ipv6.push(((data[partIndex] << 8) | data[partIndex + 1]).toString(16));
      }
      address = ipv6.join(":");
      break;
    default:
      return { hasError: true, message: `invalid addressType is ${atype}` };
  }

  if (!address) {
    return { hasError: true, message: `address is empty, addressType is ${atype}` };
  }

  const portIndex = addressIndex + addressLength;
  if (data.byteLength < portIndex + 4) return { hasError: true, message: "invalid S5 request data" };
  const portRemote = (data[portIndex] << 8) | data[portIndex + 1];

  return {
    hasError: false,
    addressType: atype,
    port: portRemote,
    hostname: address,
    isUDP,
    rawClientData: data.subarray(portIndex + 4),
  };
}

const شناسه_بایت_انبار = new Map();
const پروتکل_نخست_متن_کدگشا = new TextDecoder();

function خواندن_هگز_نیم_بایت(code) {
  if (code >= 48 && code <= 57) return code - 48;
  code |= 32;
  if (code >= 97 && code <= 102) return code - 87;
  return -1;
}

function گرفتن_شناسه_بایت(uuid) {
  const key = String(uuid || "");
  let cached = شناسه_بایت_انبار.get(key);
  if (cached) return cached;

  const clean = key.replace(/-/g, "");
  if (clean.length !== 32) return null;

  const bytes = new Uint8Array(16);
  for (let i = 0; i < 16; i++) {
    const high = خواندن_هگز_نیم_بایت(clean.charCodeAt(i * 2));
    const low = خواندن_هگز_نیم_بایت(clean.charCodeAt(i * 2 + 1));
    if (high < 0 || low < 0) return null;
    bytes[i] = (high << 4) | low;
  }

  if (شناسه_بایت_انبار.size >= 32) شناسه_بایت_انبار.clear();
  شناسه_بایت_انبار.set(key, bytes);
  return bytes;
}

function شناسه_بایت_تطبیق(data, offset, uuid) {
  const expected = گرفتن_شناسه_بایت(uuid);
  if (!expected || data.byteLength < offset + 16) return false;
  for (let i = 0; i < 16; i++) {
    if (data[offset + i] !== expected[i]) return false;
  }
  return true;
}

function تحلیل_پروتکل_نخست_درخواست(chunk, token) {
  const data = داده_تبدیل_آرایه_بایتی(chunk);
  const length = data.byteLength;
  if (length < 24) return { hasError: true, message: "Invalid data" };
  const version = data[0];
  if (!شناسه_بایت_تطبیق(data, 1, token)) return { hasError: true, message: "Invalid uuid" };

  const optLen = data[17];
  const cmdIndex = 18 + optLen;
  if (length < cmdIndex + 4) return { hasError: true, message: "Invalid data" };

  const cmd = data[cmdIndex];
  let isUDP = false;
  if (cmd === 1) {
  } else if (cmd === 2) {
    isUDP = true;
  } else {
    return { hasError: true, message: "Invalid command" };
  }

  const portIdx = cmdIndex + 1;
  const port = (data[portIdx] << 8) | data[portIdx + 1];
  let addrValIdx = portIdx + 3,
    addrLen = 0,
    hostname = "";
  const addressType = data[portIdx + 2];
  switch (addressType) {
    case 1:
      addrLen = 4;
      if (length < addrValIdx + addrLen) return { hasError: true, message: "Invalid IPv4 address length" };
      hostname = `${data[addrValIdx]}.${data[addrValIdx + 1]}.${data[addrValIdx + 2]}.${data[addrValIdx + 3]}`;
      break;
    case 2:
      if (length < addrValIdx + 1) return { hasError: true, message: "Invalid domain length" };
      addrLen = data[addrValIdx];
      addrValIdx += 1;
      if (length < addrValIdx + addrLen) return { hasError: true, message: "Invalid domain data" };
      hostname = پروتکل_نخست_متن_کدگشا.decode(data.subarray(addrValIdx, addrValIdx + addrLen));
      break;
    case 3:
      addrLen = 16;
      if (length < addrValIdx + addrLen) return { hasError: true, message: "Invalid IPv6 address length" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const base = addrValIdx + i * 2;
        ipv6.push(((data[base] << 8) | data[base + 1]).toString(16));
      }
      hostname = ipv6.join(":");
      break;
    default:
      return { hasError: true, message: `Invalid address type: ${addressType}` };
  }
  if (!hostname) return { hasError: true, message: `Invalid address: ${addressType}` };
  const rawIndex = addrValIdx + addrLen;
  return { hasError: false, addressType, port, hostname, isUDP, rawClientData: data.subarray(rawIndex), version };
}

const لایه_امن_پشتیبانی_رمزنگاری_پیکربندی = {
  "aes-128-gcm": { method: "aes-128-gcm", keyLen: 16, saltLen: 16, maxChunk: 0x3fff, aesLength: 128 },
  "aes-256-gcm": { method: "aes-256-gcm", keyLen: 32, saltLen: 32, maxChunk: 0x3fff, aesLength: 256 },
};

const رمز_لایه_امن_برچسب_طول = 16,
  یکتای_لایه_امن_طول = 12;
const لایه_امن_کلید_فرعی_اطلاعات = new TextEncoder().encode(گشا("c3Mtc3Via2V5"));
const لایه_امن_متن_کدگذار = new TextEncoder(),
  لایه_امن_متن_کدگشا = new TextDecoder(),
  لایه_امن_کلید_اصلی_انبار = new Map();

function داده_تبدیل_آرایه_بایتی(data) {
  if (data instanceof Uint8Array) return data;
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  return new Uint8Array(data || 0);
}

function پیوند_بایت_داده(...chunkList) {
  if (!chunkList || chunkList.length === 0) return new Uint8Array(0);
  const chunks = chunkList.map(داده_تبدیل_آرایه_بایتی);
  const total = chunks.reduce((sum, c) => sum + c.byteLength, 0);
  const result = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) {
    result.set(c, offset);
    offset += c.byteLength;
  }
  return result;
}

async function ارجاع_پروتکل_دوم_یو_دی_پی_داده(chunk, webSocket, بستر, request) {
  const جاری_ماژول = داده_تبدیل_آرایه_بایتی(chunk);
  if (بستر?.[گشا("5Y+N5Luj5Zyw5Z2A")])
    return ارجاع_پروتکل_دوم_یو_دی_پی_میانجی_برگشتی_داده(جاری_ماژول, webSocket, بستر, request);
  const انبار_ماژول = بستر?.[گشا("57yT5a2Y")] instanceof Uint8Array ? بستر[گشا("57yT5a2Y")] : new Uint8Array(0);
  const input = انبار_ماژول.byteLength ? پیوند_بایت_داده(انبار_ماژول, جاری_ماژول) : جاری_ماژول;
  let cursor = 0;

  while (cursor < input.byteLength) {
    const packetStart = cursor;
    const atype = input[cursor];
    let addrCursor = cursor + 1;
    let addrLen = 0;
    if (atype === 1) addrLen = 4;
    else if (atype === 4) addrLen = 16;
    else if (atype === 3) {
      if (input.byteLength < addrCursor + 1) break;
      addrLen = 1 + input[addrCursor];
    } else throw new Error(`${گشا("aW52YWxpZCB0cm9qYW4gdWRwIGFkZHJlc3NUeXBlOiA=")}${atype}`);

    const portCursor = addrCursor + addrLen;
    if (input.byteLength < portCursor + 6) break;

    const port = (input[portCursor] << 8) | input[portCursor + 1];
    const payloadLength = (input[portCursor + 2] << 8) | input[portCursor + 3];
    if (input[portCursor + 4] !== 0x0d || input[portCursor + 5] !== 0x0a)
      throw new Error(گشا("aW52YWxpZCB0cm9qYW4gdWRwIGRlbGltaXRlcg=="));

    const payloadStart = portCursor + 6;
    const payloadEnd = payloadStart + payloadLength;
    if (input.byteLength < payloadEnd) break;

    const نشانی_درگاه_سرآیند = input.slice(packetStart, portCursor + 2);
    const payload = input.slice(payloadStart, payloadEnd);
    cursor = payloadEnd;

    if (port !== 53) throw new Error("UDP is not supported");
    if (!payload.byteLength) continue;

    let tcpDNS_پرس_وجو = payload;
    if (payload.byteLength < 2 || ((payload[0] << 8) | payload[1]) !== payload.byteLength - 2) {
      tcpDNS_پرس_وجو = new Uint8Array(payload.byteLength + 2);
      tcpDNS_پرس_وجو[0] = (payload.byteLength >>> 8) & 0xff;
      tcpDNS_پرس_وجو[1] = payload.byteLength & 0xff;
      tcpDNS_پرس_وجو.set(payload, 2);
    }

    const dns_پاسخ_بستر = { [گشا("57yT5a2Y")]: new Uint8Array(0) };
    await forwardataudp(tcpDNS_پرس_وجو, webSocket, null, request, (dnsRespChunk) => {
      const جاری_پاسخ_ماژول = داده_تبدیل_آرایه_بایتی(dnsRespChunk);
      const پاسخ_ورودی = dns_پاسخ_بستر[گشا("57yT5a2Y")].byteLength
        ? پیوند_بایت_داده(dns_پاسخ_بستر[گشا("57yT5a2Y")], جاری_پاسخ_ماژول)
        : جاری_پاسخ_ماژول;
      const پاسخ_فریم_فهرست = [];
      let responseCursor = 0;
      while (responseCursor + 2 <= پاسخ_ورودی.byteLength) {
        const dnsLen = (پاسخ_ورودی[responseCursor] << 8) | پاسخ_ورودی[responseCursor + 1];
        const dnsStart = responseCursor + 2;
        const dnsEnd = dnsStart + dnsLen;
        if (dnsEnd > پاسخ_ورودی.byteLength) break;
        const dnsPayload = پاسخ_ورودی.slice(dnsStart, dnsEnd);
        const frame = new Uint8Array(نشانی_درگاه_سرآیند.byteLength + 4 + dnsPayload.byteLength);
        frame.set(نشانی_درگاه_سرآیند, 0);
        frame[نشانی_درگاه_سرآیند.byteLength] = (dnsPayload.byteLength >>> 8) & 0xff;
        frame[نشانی_درگاه_سرآیند.byteLength + 1] = dnsPayload.byteLength & 0xff;
        frame[نشانی_درگاه_سرآیند.byteLength + 2] = 0x0d;
        frame[نشانی_درگاه_سرآیند.byteLength + 3] = 0x0a;
        frame.set(dnsPayload, نشانی_درگاه_سرآیند.byteLength + 4);
        پاسخ_فریم_فهرست.push(frame);
        responseCursor = dnsEnd;
      }
      dns_پاسخ_بستر[گشا("57yT5a2Y")] = پاسخ_ورودی.slice(responseCursor);
      return پاسخ_فریم_فهرست.length ? پاسخ_فریم_فهرست : new Uint8Array(0);
    });
  }

  if (بستر) بستر[گشا("57yT5a2Y")] = input.slice(cursor);
}

function لایه_امن_افزایشی_یکتا_شمارنده(counter) {
  for (let i = 0; i < counter.length; i++) {
    counter[i] = (counter[i] + 1) & 0xff;
    if (counter[i] !== 0) return;
  }
}

async function لایه_امن_اشتقاق_کلید_اصلی(passwordText, keyLen) {
  const cacheKey = `${keyLen}:${passwordText}`;
  if (لایه_امن_کلید_اصلی_انبار.has(cacheKey)) return لایه_امن_کلید_اصلی_انبار.get(cacheKey);
  const deriveTask = (async () => {
    const pwBytes = لایه_امن_متن_کدگذار.encode(passwordText || "");
    let prev = new Uint8Array(0),
      result = new Uint8Array(0);
    while (result.byteLength < keyLen) {
      const input = new Uint8Array(prev.byteLength + pwBytes.byteLength);
      input.set(prev, 0);
      input.set(pwBytes, prev.byteLength);
      prev = new Uint8Array(await crypto.subtle.digest("MD5", input));
      result = پیوند_بایت_داده(result, prev);
    }
    return result.slice(0, keyLen);
  })();
  لایه_امن_کلید_اصلی_انبار.set(cacheKey, deriveTask);
  try {
    return await deriveTask;
  } catch (error) {
    لایه_امن_کلید_اصلی_انبار.delete(cacheKey);
    throw error;
  }
}

async function لایه_امن_اشتقاق_کلید_نشست(config, masterKey, salt, usages) {
  const hmacOpts = { name: "HMAC", hash: "SHA-1" };
  const saltHmacKey = await crypto.subtle.importKey("raw", salt, hmacOpts, false, ["sign"]);
  const prk = new Uint8Array(await crypto.subtle.sign("HMAC", saltHmacKey, masterKey));
  const prkHmacKey = await crypto.subtle.importKey("raw", prk, hmacOpts, false, ["sign"]);
  const subKey = new Uint8Array(config.keyLen);
  let prev = new Uint8Array(0),
    written = 0,
    counter = 1;
  while (written < config.keyLen) {
    const input = پیوند_بایت_داده(prev, لایه_امن_کلید_فرعی_اطلاعات, new Uint8Array([counter]));
    prev = new Uint8Array(await crypto.subtle.sign("HMAC", prkHmacKey, input));
    const copyLen = Math.min(prev.byteLength, config.keyLen - written);
    subKey.set(prev.subarray(0, copyLen), written);
    written += copyLen;
    counter += 1;
  }
  return crypto.subtle.importKey("raw", subKey, { name: "AES-GCM", length: config.aesLength }, false, usages);
}

async function رمز_لایه_امن_رمزنگاری(cryptoKey, nonceCounter, plaintext) {
  const iv = nonceCounter.slice();
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv, tagLength: 128 }, cryptoKey, plaintext);
  لایه_امن_افزایشی_یکتا_شمارنده(nonceCounter);
  return new Uint8Array(ct);
}

async function رمز_لایه_امن_رمزگشایی(cryptoKey, nonceCounter, ciphertext) {
  const iv = nonceCounter.slice();
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv, tagLength: 128 }, cryptoKey, ciphertext);
  لایه_امن_افزایشی_یکتا_شمارنده(nonceCounter);
  return new Uint8Array(pt);
}

async function forwardataTCP(
  host,
  portNum,
  rawData,
  ws,
  respHeader,
  remoteConnWrapper,
  yourUUID,
  request = null,
  میانجی_برگشتی_بستر = {},
  اجازه_پروتکل_دوم_میانجی_برگشتی = false,
  پروتکل_دوم_میانجی_برگشتی_بسته_نخست_داده = null,
  فقط_برقراری_اتصال = false,
) {
  const بستر_میانجی_برگشتی_آی_پی = میانجی_برگشتی_بستر[گشا("5Y+N5LujSVA=")] || "";
  const بستر_میانجی_نوع =
    میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] !== undefined ? میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] : null;
  const بستر_میانجی_سراسری =
    میانجی_برگشتی_بستر[گشا("5Luj55CG5YWo5bGA")] !== undefined ? میانجی_برگشتی_بستر[گشا("5Luj55CG5YWo5bGA")] : false;
  const بستر_میانجی_پارامتر = میانجی_برگشتی_بستر[گشا("5Luj55CG5Y+C5pWw")] || {};
  const بستر_میانجی_برگشتی_پشتیبان =
    میانجی_برگشتی_بستر[گشا("5Y+N5Luj5YWc5bqV")] !== undefined ? میانجی_برگشتی_بستر[گشا("5Y+N5Luj5YWc5bqV")] : true;
  let میانجی_برگشتی_آرایه_نمایه = 0;
  log(
    `${گشا("W1RDUOi9rOWPkV0g55uu5qCHOiA=")}${host}:${portNum}${گشا("IHwg5Y+N5LujSVA6IA==")}${بستر_میانجی_برگشتی_آی_پی}${گشا("IHwg5Y+N5Luj5YWc5bqVOiA=")}${بستر_میانجی_برگشتی_پشتیبان ? گشا("5piv") : گشا("5ZCm")}${گشا("IHwg5Y+N5Luj57G75Z6LOiA=")}${بستر_میانجی_نوع || گشا("cHJveHlpcA==")}${گشا("IHwg5YWo5bGAOiA=")}${بستر_میانجی_سراسری ? گشا("5piv") : گشا("5ZCm")}`,
  );
  const اتصال_مهلت_میلی_ثانیه = 1000;
  let ازطریق_میانجی_ارسال_بسته_نخست = false;
  const تی_سی_پی_اتصال = ایجاد_درخواست_تی_سی_پی_اتصال_دهنده(request);
  const استفاده_پروتکل_دوم_میانجی_برگشتی =
    اجازه_پروتکل_دوم_میانجی_برگشتی && (میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")] || null);
  const پروتکل_دوم_میانجی_برگشتی_هدف = استفاده_پروتکل_دوم_میانجی_برگشتی
    ? میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")]
    : null;
  const پروتکل_دوم_میانجی_برگشتی_دست_دادن_داده = استفاده_پروتکل_دوم_میانجی_برگشتی
    ? استخراج_پروتکل_دوم_میانجی_برگشتی_دست_دادن_داده(پروتکل_دوم_میانجی_برگشتی_بسته_نخست_داده, rawData)
    : null;
  let درانتظار_ارسال_پاسخ_سرآیند = respHeader;
  const گرفتن_خروج_پاسخ_سرآیند = () => {
    const header = درانتظار_ارسال_پاسخ_سرآیند;
    درانتظار_ارسال_پاسخ_سرآیند = null;
    return header;
  };
  if (!Number.isInteger(remoteConnWrapper.generation)) remoteConnWrapper.generation = 0;

  const نصب_جاری_اتصال = async (socket, generation, downlinkDrain, retryFunc = null) => {
    try {
      await downlinkDrain;
    } catch (e) {
      if (remoteConnWrapper.downlinkDrain === downlinkDrain) remoteConnWrapper.downlinkDrain = Promise.resolve();
      try {
        socket?.close?.();
      } catch (_) {}
      if (remoteConnWrapper.generation === generation) closeSocketQuietly(ws);
      throw e;
    }
    if (remoteConnWrapper.downlinkDrain === downlinkDrain) remoteConnWrapper.downlinkDrain = Promise.resolve();
    const اتصال_هنوز_معتبر = () => remoteConnWrapper.generation === generation && remoteConnWrapper.socket === socket;
    if (remoteConnWrapper.generation !== generation || ws.readyState !== WebSocket.OPEN) {
      try {
        socket?.close?.();
      } catch (e) {}
      if (remoteConnWrapper.generation === generation) remoteConnWrapper.socket = null;
      throw new Error("connection superseded or client closed");
    }
    remoteConnWrapper.socket = socket;
    if (فقط_برقراری_اتصال) return socket;
    connectStreams(socket, ws, گرفتن_خروج_پاسخ_سرآیند, retryFunc, اتصال_هنوز_معتبر, remoteConnWrapper).catch((err) => {
      if (!اتصال_هنوز_معتبر()) return;
      log(`${گشا("W1RDUOS4i+ihjF0g5aSE55CG5aSx6LSlOiA=")}${err?.message || err}`);
      try {
        socket?.close?.();
      } catch (e) {}
      closeSocketQuietly(ws);
    });
    return true;
  };

  async function انتظار_اتصال_برقراری(remoteSock, timeoutMs = اتصال_مهلت_میلی_ثانیه) {
    await Promise.race([
      remoteSock.opened,
      new Promise((_, reject) => setTimeout(() => reject(new Error(گشا("6L+e5o6l6LaF5pe2"))), timeoutMs)),
    ]);
  }

  async function بازکردن_تی_سی_پی_اتصال(address, port) {
    const remoteSock = تی_سی_پی_اتصال({ hostname: address, port });
    try {
      await انتظار_اتصال_برقراری(remoteSock);
      return remoteSock;
    } catch (err) {
      try {
        remoteSock?.close?.();
      } catch (e) {}
      throw err;
    }
  }

  async function نوشتن_بسته_نخست(remoteSock, data) {
    if (معتبر_داده_طول(data) <= 0) return;
    const writer = remoteSock.writable.getWriter();
    try {
      await writer.write(داده_تبدیل_آرایه_بایتی(data));
    } finally {
      try {
        writer.releaseLock();
      } catch (e) {}
    }
  }

  async function همزمان_بازکردن_نامزد_اتصال(نامزد_فهرست) {
    if (نامزد_فهرست.length === 1) {
      const نامزد = نامزد_فهرست[0];
      return { socket: await بازکردن_تی_سی_پی_اتصال(نامزد.hostname, نامزد.port), candidate: نامزد };
    }
    const attempts = نامزد_فهرست.map((نامزد) =>
      بازکردن_تی_سی_پی_اتصال(نامزد.hostname, نامزد.port).then((socket) => ({ socket, candidate: نامزد })),
    );
    let winner = null;
    try {
      winner = await Promise.any(attempts);
      return winner;
    } finally {
      if (winner) {
        for (const attempt of attempts) {
          attempt
            .then(({ socket }) => {
              if (socket !== winner.socket) {
                try {
                  socket?.close?.();
                } catch (e) {}
              }
            })
            .catch(() => {});
        }
      }
    }
  }

  async function ساخت_پیش_بارگذاری_مسابقه_نامزد_فهرست(address, port) {
    if (!پیش_بارگذاری_مسابقه_شماره_گیری || isIPHostname(address)) return null;
    log(
      `${گشا("W1RDUOebtOi/nl0g6aKE5Yqg6L2956ue6YCf5ouo5Y+35byA5ZCv77yM5byA5aeL5bm25Y+R5p+l6K+iIA==")}${address}${گشا("IOeahCBBL0FBQUEg6K6w5b2V")}`,
    );
    const [aRecords, aaaaRecords] = await Promise.all([
      دی_ان_اس_امن_پرس_وجو(address, "A"),
      دی_ان_اس_امن_پرس_وجو(address, "AAAA"),
    ]);
    const ipv4List = [
      ...new Set(
        aRecords.flatMap((r) => {
          const data = r.data;
          return r.type === 1 && typeof data === "string" && isIPv4(data) ? [data] : [];
        }),
      ),
    ];
    const ipv6List = [
      ...new Set(
        aaaaRecords.flatMap((r) => {
          const data = r.data;
          return r.type === 28 && typeof data === "string" && isIPHostname(data) ? [data] : [];
        }),
      ),
    ];
    const شماره_گیری_سقف = Math.max(1, تی_سی_پی_همزمان_شماره_گیری_داده | 0);
    const ipList =
      ipv4List.length >= شماره_گیری_سقف
        ? ipv4List.slice(0, شماره_گیری_سقف)
        : ipv4List.concat(ipv6List.slice(0, شماره_گیری_سقف - ipv4List.length));
    const استفاده_رکورد_نوع = ipv4List.length > 0 ? (ipList.length > ipv4List.length ? "A+AAAA" : "A") : "AAAA";
    if (ipList.length === 0) {
      log(
        `${گشا("W1RDUOebtOi/nl0g")}${address}${گشا("IOeahCBBL0FBQUEg5pyq6I635b6X5Y+v55So6Kej5p6Q57uT5p6c77yM6aKE5Yqg6L2956ue6YCf5LiN5Y+v55So77yM5Zue6YCA5Yiw5Y6f5aeLIGhvc3RuYW1lIOebtOi/nuOAgg==")}`,
      );
      return null;
    }
    const انتخاب_شده_آی_پی_فهرست = ipList;
    log(
      `${گشا("W1RDUOebtOi/nl0g")}${address}${گشا("IEHorrDlvZU6")}${ipv4List.length}${گشا("IEFBQUHorrDlvZU6")}${ipv6List.length}${گشا("77yM5L2/55So")}${استفاده_رکورد_نوع}${گشا("6K6w5b2V77yM56ue6YCf5ouo5Y+3IA==")}${انتخاب_شده_آی_پی_فهرست.length}/${شماره_گیری_سقف}: ${انتخاب_شده_آی_پی_فهرست.join(", ")}`,
    );
    return انتخاب_شده_آی_پی_فهرست.map((hostname, attempt) => ({ hostname, port, attempt, resolvedFrom: address }));
  }

  async function connectDirect(address, port, data = null, فعال_پیش_بارگذاری = false) {
    const پیش_بارگذاری_نامزد_فهرست = فعال_پیش_بارگذاری
      ? await ساخت_پیش_بارگذاری_مسابقه_نامزد_فهرست(address, port)
      : null;
    const نامزد_فهرست =
      پیش_بارگذاری_نامزد_فهرست ||
      Array.from({ length: تی_سی_پی_همزمان_شماره_گیری_داده }, (_, attempt) => ({ hostname: address, port, attempt }));
    log(
      پیش_بارگذاری_نامزد_فهرست
        ? `${گشا("W1RDUOebtOi/nl0g5bm25Y+R5bCd6K+VIA==")}${نامزد_فهرست.length}${گشا("IOi3rzog")}${نامزد_فهرست.map((نامزد) => `${نامزد.hostname}:${نامزد.port}`).join(", ")}`
        : `${گشا("W1RDUOebtOi/nl0g5bm25Y+R5bCd6K+VIA==")}${نامزد_فهرست.length}${گشا("IOi3rzog")}${address}:${port}`,
    );
    let socket = null;
    try {
      const اتصال_نتیجه = await همزمان_بازکردن_نامزد_اتصال(نامزد_فهرست);
      socket = اتصال_نتیجه.socket;
      if (پیش_بارگذاری_نامزد_فهرست) {
        const winner = اتصال_نتیجه.candidate;
        log(
          `${گشا("W1RDUOebtOi/nl0g6aKE5Yqg6L2956ue6YCf57uT5p6cOiA=")}${winner.hostname}:${winner.port}${گشا("IOiDnOWHuu+8jOa6kOWfn+WQjTog")}${winner.resolvedFrom || address}`,
        );
      }
      await نوشتن_بسته_نخست(socket, data);
      return socket;
    } catch (err) {
      try {
        socket?.close?.();
      } catch (e) {}
      if (پیش_بارگذاری_نامزد_فهرست)
        log(`${گشا("W1RDUOebtOi/nl0g6aKE5Yqg6L2956ue6YCf5aSx6LSlOiA=")}${err.message || err}`);
      throw err;
    }
  }

  async function اتصال_آیپی_میانجی(
    address,
    port,
    data = null,
    همه_میانجی_برگشتی_آرایه = null,
    فعال_میانجی_برگشتی_شکست_پشتیبان = true,
  ) {
    if (همه_میانجی_برگشتی_آرایه && همه_میانجی_برگشتی_آرایه.length > 0) {
      const واقعی_همزمان_داده = Math.max(1, Math.floor(Number(میانجی_برگشتی_همزمان_شماره_گیری_داده) || 1));
      for (let i = 0; i < همه_میانجی_برگشتی_آرایه.length; i += واقعی_همزمان_داده) {
        const نامزد_فهرست = [];
        for (let j = 0; j < واقعی_همزمان_داده && i + j < همه_میانجی_برگشتی_آرایه.length; j++) {
          const نمایه = (میانجی_برگشتی_آرایه_نمایه + i + j) % همه_میانجی_برگشتی_آرایه.length;
          const [میانجی_برگشتی_نشانی_2, میانجی_برگشتی_درگاه] = همه_میانجی_برگشتی_آرایه[نمایه];
          نامزد_فهرست.push({ hostname: میانجی_برگشتی_نشانی_2, port: میانجی_برگشتی_درگاه, index: نمایه });
        }
        let socket = null,
          candidate = null;
        try {
          log(
            `${گشا("W+WPjeS7o+i/nuaOpV0g5bm25Y+R5bCd6K+VIA==")}${نامزد_فهرست.length}${گشا("IOi3rzog")}${نامزد_فهرست.map((نامزد) => `${نامزد.hostname}:${نامزد.port}`).join(", ")}`,
          );
          const اتصال_نتیجه = await همزمان_بازکردن_نامزد_اتصال(نامزد_فهرست);
          socket = اتصال_نتیجه.socket;
          candidate = اتصال_نتیجه.candidate;
          await نوشتن_بسته_نخست(socket, data);
          log(
            `${گشا("W+WPjeS7o+i/nuaOpV0g5oiQ5Yqf6L+e5o6l5YiwOiA=")}${candidate.hostname}:${candidate.port}${گشا("ICjntKLlvJU6IA==")}${candidate.index})`,
          );
          میانجی_برگشتی_آرایه_نمایه = candidate.index;
          return socket;
        } catch (err) {
          try {
            socket?.close?.();
          } catch (e) {}
          log(`${گشا("W+WPjeS7o+i/nuaOpV0g5pys5om56L+e5o6l5aSx6LSlOiA=")}${err.message || err}`);
        }
      }
    }

    if (فعال_میانجی_برگشتی_شکست_پشتیبان) return connectDirect(address, port, data, false);
    else {
      throw new Error(
        گشا(
          "W+WPjeS7o+i/nuaOpV0g5omA5pyJ5Y+N5Luj6L+e5o6l5aSx6LSl77yM5LiU5pyq5ZCv55So5Y+N5Luj5YWc5bqV77yM6L+e5o6l57uI5q2i44CC",
        ),
      );
    }
  }

  async function connecttoPry(اجازه_ارسال_بسته_نخست = true) {
    if (remoteConnWrapper.connectingPromise) {
      await remoteConnWrapper.connectingPromise;
      return;
    }
    const { generation: جاری_اتصال_نسل, downlinkDrain } = باز_شروع_تی_سی_پی_اتصال_نسل(remoteConnWrapper);

    let این_بار_ارسال_بسته_نخست = false,
      این_بار_بسته_نخست_داده = null;
    if (استفاده_پروتکل_دوم_میانجی_برگشتی) {
      if (
        اجازه_ارسال_بسته_نخست &&
        !ازطریق_میانجی_ارسال_بسته_نخست &&
        معتبر_داده_طول(پروتکل_دوم_میانجی_برگشتی_بسته_نخست_داده) > 0
      ) {
        این_بار_بسته_نخست_داده = پروتکل_دوم_میانجی_برگشتی_بسته_نخست_داده;
        این_بار_ارسال_بسته_نخست = معتبر_داده_طول(rawData) > 0;
      } else {
        این_بار_بسته_نخست_داده = پروتکل_دوم_میانجی_برگشتی_دست_دادن_داده;
      }
    } else {
      این_بار_ارسال_بسته_نخست = اجازه_ارسال_بسته_نخست && !ازطریق_میانجی_ارسال_بسته_نخست && معتبر_داده_طول(rawData) > 0;
      این_بار_بسته_نخست_داده = این_بار_ارسال_بسته_نخست ? rawData : null;
    }

    const جاری_اتصال_وظیفه = (async () => {
      let newSocket = null;
      try {
        if (استفاده_پروتکل_دوم_میانجی_برگشتی) {
          log(`${گشا("W+acqOmprOWPjeS7o10g5Luj55CG5YiwOiA=")}${host}:${portNum}`);
          newSocket = await اتصال_پروتکل_دوم_میانجی_برگشتی(
            این_بار_بسته_نخست_داده,
            تی_سی_پی_اتصال,
            پروتکل_دوم_میانجی_برگشتی_هدف,
          );
        } else if (بستر_میانجی_نوع === گشا("c29ja3M1")) {
          log(`${گشا("W1NPQ0tTNeS7o+eQhl0g5Luj55CG5YiwOiA=")}${host}:${portNum}`);
          newSocket = await اتصال_میانجی(host, portNum, این_بار_بسته_نخست_داده, تی_سی_پی_اتصال, بستر_میانجی_پارامتر);
        } else if (بستر_میانجی_نوع === "http") {
          log(`${گشا("W0hUVFDku6PnkIZdIOS7o+eQhuWIsDog")}${host}:${portNum}`);
          newSocket = await httpConnect(
            host,
            portNum,
            این_بار_بسته_نخست_داده,
            false,
            تی_سی_پی_اتصال,
            بستر_میانجی_پارامتر,
          );
        } else if (بستر_میانجی_نوع === "https") {
          log(`${گشا("W0hUVFBT5Luj55CGXSDku6PnkIbliLA6IA==")}${host}:${portNum}`);
          newSocket = isIPHostname(بستر_میانجی_پارامتر.hostname)
            ? await httpsConnect(host, portNum, این_بار_بسته_نخست_داده, تی_سی_پی_اتصال, بستر_میانجی_پارامتر)
            : await httpConnect(host, portNum, این_بار_بسته_نخست_داده, true, تی_سی_پی_اتصال, بستر_میانجی_پارامتر);
        } else if (بستر_میانجی_نوع === گشا("dHVybg==")) {
          log(`${گشا("W1RVUk7ku6PnkIZdIOS7o+eQhuWIsDog")}${host}:${portNum}`);
          newSocket = await اتصال_گردش(بستر_میانجی_پارامتر, host, portNum, تی_سی_پی_اتصال);
          if (معتبر_داده_طول(این_بار_بسته_نخست_داده) > 0) {
            const writer = newSocket.writable.getWriter();
            try {
              await writer.write(داده_تبدیل_آرایه_بایتی(این_بار_بسته_نخست_داده));
            } finally {
              try {
                writer.releaseLock();
              } catch (e) {}
            }
          }
        } else if (بستر_میانجی_نوع === گشا("c3N0cA==")) {
          log(`${گشا("W1NTVFDku6PnkIZdIOS7o+eQhuWIsDog")}${host}:${portNum}`);
          newSocket = await اتصال_مجرای_امن(بستر_میانجی_پارامتر, host, portNum, تی_سی_پی_اتصال);
          if (معتبر_داده_طول(این_بار_بسته_نخست_داده) > 0) {
            const writer = newSocket.writable.getWriter();
            try {
              await writer.write(داده_تبدیل_آرایه_بایتی(این_بار_بسته_نخست_داده));
            } finally {
              try {
                writer.releaseLock();
              } catch (e) {}
            }
          }
        } else {
          log(`${گشا("W+WPjeS7o+i/nuaOpV0g5Luj55CG5YiwOiA=")}${host}:${portNum}`);
          const همه_میانجی_برگشتی_آرایه = await تحلیل_نشانی_درگاه(بستر_میانجی_برگشتی_آی_پی, host, yourUUID);
          newSocket = await اتصال_آیپی_میانجی(
            `${کد_شناسه_فرهنگ[0]}.tp1.${کد_شناسه_فرهنگ[2]}.xyz`,
            1,
            این_بار_بسته_نخست_داده,
            همه_میانجی_برگشتی_آرایه,
            بستر_میانجی_برگشتی_پشتیبان,
          );
        }
        await نصب_جاری_اتصال(newSocket, جاری_اتصال_نسل, downlinkDrain);
        if (این_بار_ارسال_بسته_نخست) ازطریق_میانجی_ارسال_بسته_نخست = true;
      } catch (err) {
        try {
          newSocket?.close?.();
        } catch (e) {}
        if (remoteConnWrapper.generation === جاری_اتصال_نسل) {
          remoteConnWrapper.socket = null;
          closeSocketQuietly(ws);
          throw err;
        }
      }
    })();

    remoteConnWrapper.connectingPromise = جاری_اتصال_وظیفه;
    try {
      await جاری_اتصال_وظیفه;
    } finally {
      if (remoteConnWrapper.connectingPromise === جاری_اتصال_وظیفه) {
        remoteConnWrapper.connectingPromise = null;
      }
    }
  }
  remoteConnWrapper.retryConnect = async () => connecttoPry(!ازطریق_میانجی_ارسال_بسته_نخست);

  if (
    بستر_میانجی_نوع &&
    (بستر_میانجی_سراسری || فهرست_سفید_میانجی.some((p) => new RegExp(`^${p.replace(/\*/g, ".*")}$`, "i").test(host)))
  ) {
    log(`${گشا("W1RDUOi9rOWPkV0g5ZCv55SoIFNPQ0tTNS9IVFRQL0hUVFBTL1RVUk4vU1NUUCDlhajlsYDku6PnkIY=")}`);
    try {
      await connecttoPry();
      if (فقط_برقراری_اتصال) return remoteConnWrapper.socket;
    } catch (err) {
      log(`${گشا("W1RDUOi9rOWPkV0gU09DS1M1L0hUVFAvSFRUUFMvVFVSTi9TU1RQIOS7o+eQhui/nuaOpeWksei0pTog")}${err.message}`);
      throw err;
    }
  } else {
    let مستقیم_نسل = remoteConnWrapper.generation;
    try {
      log(`${گشا("W1RDUOi9rOWPkV0g5bCd6K+V55u06L+e5YiwOiA=")}${host}:${portNum}`);
      const نسل_اتصال = باز_شروع_تی_سی_پی_اتصال_نسل(remoteConnWrapper);
      مستقیم_نسل = نسل_اتصال.generation;
      const initialSocket = await connectDirect(host, portNum, rawData, true);
      await نصب_جاری_اتصال(initialSocket, مستقیم_نسل, نسل_اتصال.downlinkDrain, async () => {
        if (remoteConnWrapper.generation !== مستقیم_نسل || remoteConnWrapper.socket !== initialSocket) return;
        await connecttoPry();
      });
      if (فقط_برقراری_اتصال) return initialSocket;
    } catch (err) {
      log(`${گشا("W1RDUOi9rOWPkV0g55u06L+eIA==")}${host}:${portNum}${گشا("IOWksei0pTog")}${err.message}`);
      if (remoteConnWrapper.generation !== مستقیم_نسل) throw err;
      if (err instanceof Error && err.name === گشا("6aKE5Yqg6L296Kej5p6Q5Li656m6")) {
        closeSocketQuietly(ws);
        throw err;
      }
      if (ws.readyState !== WebSocket.OPEN) throw err;
      await connecttoPry();
      if (فقط_برقراری_اتصال) return remoteConnWrapper.socket;
    }
  }
}

async function forwardataudp(udpChunk, webSocket, respHeader, request, پاسخ_لفاف_ابزار = null) {
  const درخواست_داده = داده_تبدیل_آرایه_بایتی(udpChunk);
  const درخواست_بایت_داده = درخواست_داده.byteLength;
  log(`${گشا("W1VEUOi9rOWPkV0g5pS25YiwIEROUyDor7fmsYI6IA==")}${درخواست_بایت_داده}B -> 8.8.4.4:53`);
  try {
    const تی_سی_پی_اتصال = ایجاد_درخواست_تی_سی_پی_اتصال_دهنده(request);
    const tcpSocket = تی_سی_پی_اتصال({ hostname: "8.8.4.4", port: 53 });
    let پروتکل_نخست_Header = respHeader;
    const writer = tcpSocket.writable.getWriter();
    await writer.write(درخواست_داده);
    log(`${گشا("W1VEUOi9rOWPkV0gRE5TIOivt+axguW3suWGmeWFpeS4iua4uDog")}${درخواست_بایت_داده}B`);
    writer.releaseLock();
    await tcpSocket.readable.pipeTo(
      new WritableStream({
        async write(chunk) {
          const اصلی_پاسخ = داده_تبدیل_آرایه_بایتی(chunk);
          log(`${گشا("W1VEUOi9rOWPkV0g5pS25YiwIEROUyDlk43lupQ6IA==")}${اصلی_پاسخ.byteLength}B`);
          const لفاف_نتیجه = پاسخ_لفاف_ابزار ? await پاسخ_لفاف_ابزار(اصلی_پاسخ) : اصلی_پاسخ;
          const ارسال_قطعه_فهرست = Array.isArray(لفاف_نتیجه) ? لفاف_نتیجه : [لفاف_نتیجه];
          if (!ارسال_قطعه_فهرست.length) return;
          if (webSocket.readyState !== WebSocket.OPEN) return;
          for (const fragment of ارسال_قطعه_فهرست) {
            const ارجاع_پاسخ = داده_تبدیل_آرایه_بایتی(fragment);
            if (!ارجاع_پاسخ.byteLength) continue;
            if (پروتکل_نخست_Header) {
              const response = new Uint8Array(پروتکل_نخست_Header.length + ارجاع_پاسخ.byteLength);
              response.set(پروتکل_نخست_Header, 0);
              response.set(ارجاع_پاسخ, پروتکل_نخست_Header.length);
              await وب_سوکت_ارسال_و_انتظار(webSocket, response.buffer);
              پروتکل_نخست_Header = null;
            } else {
              await وب_سوکت_ارسال_و_انتظار(webSocket, ارجاع_پاسخ);
            }
          }
        },
      }),
    );
  } catch (error) {
    log(`${گشا("W1VEUOi9rOWPkV0gRE5TIOi9rOWPkeWksei0pTog")}${error?.message || error}`);
  }
}

function closeSocketQuietly(socket) {
  try {
    if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CLOSING) {
      socket.close();
    }
  } catch (error) {}
}

function formatIdentifier(arr, offset = 0) {
  const hex = [...arr.slice(offset, offset + 16)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

async function وب_سوکت_ارسال_و_انتظار(webSocket, payload) {
  const sendResult = webSocket.send(payload);
  if (sendResult && typeof sendResult.then === "function") await sendResult;
}

function ایجاد_دانه_جمع_آور(ظرفیت, رونوشت_بسته_بندی_نتیجه = false) {
  let صف = [];
  let سرآیند = 0;
  let بایت_داده = 0;
  let بسته_بندی_بافر = null;

  const است_خالی = () => سرآیند >= صف.length;
  const فشرده = () => {
    if (سرآیند > 32 && سرآیند * 2 >= صف.length) {
      صف = صف.slice(سرآیند);
      سرآیند = 0;
    }
  };
  const گرفتن_خروج = () => {
    if (است_خالی()) return null;
    const item = صف[سرآیند];
    صف[سرآیند++] = undefined;
    بایت_داده -= item.chunk.byteLength;
    فشرده();
    return item;
  };

  return {
    get [گشا("5a2X6IqC5pWw")]() {
      return بایت_داده;
    },
    get [گشا("5p2h55uu5pWw")]() {
      return صف.length - سرآیند;
    },
    get [گشا("5Li656m6")]() {
      return است_خالی();
    },
    [گشا("5riF56m6")](پردازش_مورد = null) {
      if (پردازش_مورد) {
        for (let i = سرآیند; i < صف.length; i++) {
          if (صف[i]) پردازش_مورد(صف[i]);
        }
      }
      صف = [];
      سرآیند = 0;
      بایت_داده = 0;
    },
    [گشا("5pS257qz")](item) {
      if (!item?.chunk?.byteLength) return false;
      صف.push(item);
      بایت_داده += item.chunk.byteLength;
      return true;
    },
    [گشا("5ZCI5YyF")]() {
      const first = گرفتن_خروج();
      if (!first) return null;
      const items = [first];
      if (است_خالی() || first.chunk.byteLength >= ظرفیت) return { chunk: first.chunk, items };

      let totalBytes = first.chunk.byteLength;
      let end = سرآیند;
      while (end < صف.length) {
        const nextBytes = totalBytes + صف[end].chunk.byteLength;
        if (nextBytes > ظرفیت) break;
        totalBytes = nextBytes;
        end++;
      }
      if (end === سرآیند) return { chunk: first.chunk, items };

      const output = (بسته_بندی_بافر ||= new Uint8Array(ظرفیت));
      output.set(first.chunk, 0);
      let offset = first.chunk.byteLength;
      while (سرآیند < end) {
        const next = صف[سرآیند];
        صف[سرآیند++] = undefined;
        بایت_داده -= next.chunk.byteLength;
        items.push(next);
        output.set(next.chunk, offset);
        offset += next.chunk.byteLength;
      }
      فشرده();
      const bundled = output.subarray(0, totalBytes);
      return { chunk: رونوشت_بسته_بندی_نتیجه ? bundled.slice() : bundled, items };
    },
  };
}

function ایجاد_بالارو_دانه_بسته_بندی_جریان(هدف_بایت = بالارو_بسته_بندی_هدف_بایت) {
  const identity =
    typeof IdentityTransformStream !== "undefined" ? new IdentityTransformStream() : new TransformStream();
  const writer = identity.writable.getWriter();
  const بافر = new Uint8Array(هدف_بایت);
  let طول_بافر = 0;
  let زمان_سنج = null;
  let درراه_نوشتن = null;
  let زنجیره_تخلیه = Promise.resolve();

  const پاکسازی_زمان_سنج = () => {
    if (زمان_سنج) {
      clearTimeout(زمان_سنج);
      زمان_سنج = null;
    }
  };

  const سری_نوشتن = async (chunk) => {
    if (درراه_نوشتن) await درراه_نوشتن;
    درراه_نوشتن = writer.write(chunk);
    try {
      await درراه_نوشتن;
    } finally {
      درراه_نوشتن = null;
    }
  };

  const تخلیه = async () => {
    if (طول_بافر) {
      const chunk = بافر.slice(0, طول_بافر);
      طول_بافر = 0;
      await سری_نوشتن(chunk);
    }
  };

  const درصف_تخلیه = () => {
    زنجیره_تخلیه = زنجیره_تخلیه.then(() => تخلیه()).catch(() => {});
  };

  const راه_اندازی_زمان_سنج = () => {
    if (زمان_سنج) return;
    زمان_سنج = setTimeout(() => {
      زمان_سنج = null;
      درصف_تخلیه();
    }, 1);
  };

  return {
    readable: identity.readable,
    [گشا("5YaZ5YWl")]: async (chunk) => {
      const data = داده_تبدیل_آرایه_بایتی(chunk);
      if (!data.byteLength) return;
      if (data.byteLength >= هدف_بایت) {
        پاکسازی_زمان_سنج();
        if (طول_بافر) await تخلیه();
        await سری_نوشتن(data);
        return;
      }
      if (طول_بافر + data.byteLength >= هدف_بایت) {
        const output = new Uint8Array(طول_بافر + data.byteLength);
        output.set(بافر.subarray(0, طول_بافر), 0);
        output.set(data, طول_بافر);
        طول_بافر = 0;
        پاکسازی_زمان_سنج();
        await سری_نوشتن(output);
      } else {
        بافر.set(data, طول_بافر);
        طول_بافر += data.byteLength;
        راه_اندازی_زمان_سنج();
      }
    },
    [گشا("57uT5p2f")]: async () => {
      پاکسازی_زمان_سنج();
      try {
        await زنجیره_تخلیه;
        await تخلیه();
        await writer.close();
      } finally {
        try {
          writer.releaseLock();
        } catch (e) {}
      }
    },
  };
}

function ایجاد_بالارو_نوشتن_صف({
  [گشا("6I635Y+W5YaZ5YWl5Zmo")]: گرفتن_نویسنده,
  [گشا("6I635Y+W6L+e5o6l5Lu75Yqh")]: گرفتن_اتصال_وظیفه = null,
  [گشا("6YeK5pS+5YaZ5YWl5Zmo")]: آزادسازی_نویسنده,
  [گشا("6YeN6K+V6L+e5o6l")]: تلاش_مجدد_اتصال,
  [گشا("5YWz6Zet6L+e5o6l")]: بستن_اتصال,
  [گشا("5ZCN56ew")]: نام = گشا("5LiK6KGM6Zif5YiX"),
}) {
  const grain = ایجاد_دانه_جمع_آور(بالارو_بسته_بندی_هدف_بایت);
  let draining = false;
  let closed = false;
  let idleResolvers = [];
  let activeCompletions = null;

  const settleCompletions = (completions, err = null) => {
    if (!completions) return;
    for (const completion of completions) {
      if (err) completion.reject(err);
      else completion.resolve();
    }
  };

  const resolveIdle = () => {
    if (grain[گشا("5a2X6IqC5pWw")] || draining || !idleResolvers.length) return;
    const resolvers = idleResolvers;
    idleResolvers = [];
    for (const resolve of resolvers) resolve();
  };

  const clear = (err = null) => {
    const closeErr = err || (closed ? new Error(`${نام}: queue closed`) : null);
    if (closeErr) {
      grain[گشا("5riF56m6")]((item) => settleCompletions(item.completions, closeErr));
      settleCompletions(activeCompletions, closeErr);
      activeCompletions = null;
    } else grain[گشا("5riF56m6")]();
    resolveIdle();
  };

  const bundle = () => {
    const packed = grain[گشا("5ZCI5YyF")]();
    if (!packed) return null;
    let allowRetry = true;
    let completions = null;
    for (const item of packed.items) {
      allowRetry = allowRetry && item.allowRetry;
      if (item.completions) completions = completions ? completions.concat(item.completions) : item.completions;
    }
    return { chunk: packed.chunk, allowRetry, completions };
  };

  const انتظار_موجود_نویسنده = async () => {
    let writer = گرفتن_نویسنده();
    if (writer) return writer;
    const connectionTask = گرفتن_اتصال_وظیفه?.();
    if (connectionTask) await connectionTask;
    return گرفتن_نویسنده();
  };

  const drain = async () => {
    if (draining || closed) return;
    draining = true;
    try {
      for (;;) {
        if (closed) break;
        const item = bundle();
        if (!item) break;
        const completions = item.completions || null;
        activeCompletions = completions;
        try {
          let writer = await انتظار_موجود_نویسنده();
          if (closed) break;
          if (!writer) throw new Error(`${نام}: remote writer unavailable`);
          try {
            await writer.write(item.chunk);
          } catch (err) {
            آزادسازی_نویسنده?.();
            if (closed) break;
            if (!item.allowRetry || typeof تلاش_مجدد_اتصال !== "function") throw err;
            await تلاش_مجدد_اتصال();
            if (closed) break;
            writer = گرفتن_نویسنده();
            if (!writer) throw err;
            await writer.write(item.chunk);
          }
          settleCompletions(completions);
        } catch (err) {
          settleCompletions(completions, err);
          throw err;
        } finally {
          if (activeCompletions === completions) activeCompletions = null;
        }
      }
    } catch (err) {
      closed = true;
      clear(err);
      log(`[${نام}${گشا("XSDlhpnlhaXlpLHotKU6IA==")}${err?.message || err}`);
      try {
        بستن_اتصال?.(err);
      } catch (_) {}
    } finally {
      draining = false;
      if (!closed && !grain[گشا("5Li656m6")]) drain();
      else resolveIdle();
    }
  };

  const enqueue = (data, allowRetry = true, waitForFlush = false) => {
    if (closed) return false;
    //
    //
    if (!گرفتن_نویسنده() && !گرفتن_اتصال_وظیفه?.()) return false;
    const chunk = داده_تبدیل_آرایه_بایتی(data);
    if (!chunk.byteLength) return true;
    const nextBytes = grain[گشا("5a2X6IqC5pWw")] + chunk.byteLength;
    const nextItems = grain[گشا("5p2h55uu5pWw")] + 1;
    if (nextBytes > بالارو_صف_حداکثر_بایت || nextItems > بالارو_صف_حداکثر_آیتم) {
      closed = true;
      const err = Object.assign(new Error(`${نام}: upload queue overflow (${nextBytes}B/${nextItems})`), {
        isQueueOverflow: true,
      });
      clear(err);
      log(`[${نام}${گشا("XSDpmJ/liJfotoXpmZDvvIzlhbPpl63ov57mjqU=")}`);
      try {
        بستن_اتصال?.(err);
      } catch (_) {}
      throw err;
    }
    let completionPromise = null;
    let completions = null;
    if (waitForFlush) {
      completions = [];
      completionPromise = new Promise((resolve, reject) => completions.push({ resolve, reject }));
    }
    grain[گشا("5pS257qz")]({ chunk, allowRetry, completions });
    if (!draining) drain();
    return waitForFlush ? completionPromise.then(() => true) : true;
  };

  return {
    [گشا("5YaZ5YWl")](data, allowRetry = true) {
      return enqueue(data, allowRetry, false);
    },
    [گشا("5YaZ5YWl5bm2562J5b6F")](data, allowRetry = true) {
      return enqueue(data, allowRetry, true);
    },
    async [گشا("562J5b6F56m6")]() {
      if (!grain[گشا("5a2X6IqC5pWw")] && !draining) return;
      await new Promise((resolve) => idleResolvers.push(resolve));
    },
    [گشا("5riF56m6")]() {
      closed = true;
      clear();
    },
  };
}

function ایجاد_پایین_رو_دانه_فرستنده(webSocket, headerData = null, isActive = null) {
  const packetCap = پایین_رو_دانه_بسته_بایت;
  const tailBytes = پایین_رو_دانه_دم_حدآستانه;
  const grain = ایجاد_دانه_جمع_آور(packetCap, true);
  let header = typeof headerData === "function" ? null : headerData;
  const گرفتن_پاسخ_سرآیند =
    typeof headerData === "function"
      ? headerData
      : () => {
          const value = header;
          header = null;
          return value;
        };
  let flushTimer = null;
  let generation = 0;
  let scheduledGeneration = 0;
  let waitRounds = 0;
  let flushPromise = null;
  let directSendPromise = null;
  let اجباری_تخلیه = false;
  let توقف_شروع_شده = false;
  let فعال_ارسال_داده = 0;
  let فعال_ارسال_مستقیم_داده = 0;
  let فعال_ارسال_خطا = null;
  let فعال_ارسال_منتظر = [];
  const انتظار_فعال_ارسال_تکمیل = () => {
    if (!فعال_ارسال_داده && !فعال_ارسال_مستقیم_داده) return Promise.resolve();
    return new Promise((resolve) => فعال_ارسال_منتظر.push(resolve));
  };
  const نشانه_گذاری_ارسال_تکمیل = () => {
    if (فعال_ارسال_داده || فعال_ارسال_مستقیم_داده || !فعال_ارسال_منتظر.length) return;
    const resolvers = فعال_ارسال_منتظر;
    فعال_ارسال_منتظر = [];
    for (const resolve of resolvers) resolve();
  };
  const بررسی_فعال_ارسال_خطا = () => {
    if (!فعال_ارسال_خطا) return;
    const err = فعال_ارسال_خطا;
    grain[گشا("5riF56m6")]();
    throw err;
  };
  const جاری_فرستنده_معتبر = () => اجباری_تخلیه || !isActive || isActive();
  const بستن_فعال_اتصال = () => {
    if (جاری_فرستنده_معتبر()) closeSocketQuietly(webSocket);
  };

  const ارسال_قطعه_اصلی = async (chunk) => {
    if (!جاری_فرستنده_معتبر()) return;
    if (webSocket.readyState !== WebSocket.OPEN) throw new Error("ws.readyState is not open");
    chunk = سرآیند_پاسخ_ضمیمه(chunk);
    await وب_سوکت_ارسال_و_انتظار(webSocket, chunk);
  };

  const سری_ارسال_قطعه_اصلی = async (chunk) => {
    while (directSendPromise) await directSendPromise;
    const sendTask = ارسال_قطعه_اصلی(chunk);
    directSendPromise = sendTask;
    try {
      await sendTask;
    } finally {
      if (directSendPromise === sendTask) directSendPromise = null;
    }
  };

  const سرآیند_پاسخ_ضمیمه = (chunk) => {
    const responseHeader = گرفتن_پاسخ_سرآیند();
    if (!responseHeader) return chunk;
    const merged = new Uint8Array(responseHeader.length + chunk.byteLength);
    merged.set(responseHeader, 0);
    merged.set(chunk, responseHeader.length);
    return merged;
  };

  const flush = async () => {
    while (flushPromise) await flushPromise;
    if (flushTimer) clearTimeout(flushTimer);
    flushTimer = null;
    waitRounds = 0;
    if (!جاری_فرستنده_معتبر()) {
      grain[گشا("5riF56m6")]();
      return;
    }
    const ارسال_وظیفه = (async () => {
      for (;;) {
        if (!جاری_فرستنده_معتبر()) {
          grain[گشا("5riF56m6")]();
          break;
        }
        const packed = grain[گشا("5ZCI5YyF")]();
        if (!packed) break;
        await سری_ارسال_قطعه_اصلی(packed.chunk);
      }
    })();
    flushPromise = ارسال_وظیفه
      .catch((err) => {
        فعال_ارسال_خطا ||= err;
        throw err;
      })
      .finally(() => {
        flushPromise = null;
      });
    return flushPromise;
  };

  const scheduleFlush = () => {
    if (!جاری_فرستنده_معتبر()) {
      grain[گشا("5riF56m6")]();
      return;
    }
    if (grain[گشا("5Li656m6")] || flushTimer) return;
    if (grain[گشا("5a2X6IqC5pWw")] >= packetCap || packetCap - grain[گشا("5a2X6IqC5pWw")] < tailBytes) {
      flush().catch(بستن_فعال_اتصال);
      return;
    }
    flushTimer = setTimeout(() => {
      flushTimer = null;
      if (!جاری_فرستنده_معتبر()) {
        grain[گشا("5riF56m6")]();
        return;
      }
      if (grain[گشا("5Li656m6")]) return;
      if (grain[گشا("5a2X6IqC5pWw")] >= packetCap || packetCap - grain[گشا("5a2X6IqC5pWw")] < tailBytes) {
        flush().catch(بستن_فعال_اتصال);
        return;
      }
      if (
        waitRounds < پایین_رو_دانه_حداکثر_انتظار_دور &&
        (generation !== scheduledGeneration || grain[گشا("5a2X6IqC5pWw")] < پایین_رو_دانه_سطح_پایین_بایت)
      ) {
        waitRounds++;
        scheduledGeneration = generation;
        scheduleFlush();
        return;
      }
      flush().catch(بستن_فعال_اتصال);
    }, 1);
  };

  return {
    async [گشا("55u05o6l5Y+R6YCB")](data) {
      if (توقف_شروع_شده || !جاری_فرستنده_معتبر()) return;
      فعال_ارسال_مستقیم_داده++;
      try {
        const chunk = داده_تبدیل_آرایه_بایتی(data);
        if (!chunk.byteLength) return;
        await سری_ارسال_قطعه_اصلی(chunk);
      } catch (err) {
        فعال_ارسال_خطا ||= err;
        throw err;
      } finally {
        فعال_ارسال_مستقیم_داده--;
        نشانه_گذاری_ارسال_تکمیل();
      }
    },
    async [گشا("5Y+R6YCB")](data) {
      if (توقف_شروع_شده || !جاری_فرستنده_معتبر()) return;
      فعال_ارسال_داده++;
      try {
        const chunk = داده_تبدیل_آرایه_بایتی(data);
        if (!chunk.byteLength) return;
        let offset = 0;
        const totalBytes = chunk.byteLength;
        while (offset < totalBytes) {
          const remainingBytes = totalBytes - offset;
          if (grain[گشا("5Li656m6")] && remainingBytes >= packetCap) {
            const sendBytes = Math.min(packetCap, remainingBytes);
            const view = offset || sendBytes !== totalBytes ? chunk.subarray(offset, offset + sendBytes) : chunk;
            await سری_ارسال_قطعه_اصلی(view);
            offset += sendBytes;
            continue;
          }
          const copyBytes = Math.min(packetCap - grain[گشا("5a2X6IqC5pWw")], totalBytes - offset);
          if (!copyBytes) {
            await flush();
            continue;
          }
          grain[گشا("5pS257qz")]({
            chunk: offset || copyBytes !== totalBytes ? chunk.subarray(offset, offset + copyBytes) : chunk,
          });
          offset += copyBytes;
          generation++;
          if (grain[گشا("5a2X6IqC5pWw")] >= packetCap || packetCap - grain[گشا("5a2X6IqC5pWw")] < tailBytes)
            await flush();
          else scheduleFlush();
        }
      } catch (err) {
        فعال_ارسال_خطا ||= err;
        throw err;
      } finally {
        فعال_ارسال_داده--;
        نشانه_گذاری_ارسال_تکمیل();
      }
    },
    flush,
    async [گشا("5YGc5q2i5bm25Yi35paw")]() {
      if (توقف_شروع_شده) {
        await انتظار_فعال_ارسال_تکمیل();
        while (directSendPromise) await directSendPromise;
        بررسی_فعال_ارسال_خطا();
        await flush();
        return;
      }
      توقف_شروع_شده = true;
      اجباری_تخلیه = true;
      if (flushTimer) clearTimeout(flushTimer);
      flushTimer = null;
      await انتظار_فعال_ارسال_تکمیل();
      while (directSendPromise) await directSendPromise;
      بررسی_فعال_ارسال_خطا();
      await flush();
    },
  };
}

async function connectStreams(
  remoteSocket,
  webSocket,
  headerData,
  retryFunc,
  isCurrentSocket = null,
  remoteConnWrapper = null,
) {
  let header = headerData,
    hasData = false,
    reader,
    useBYOB = false,
    readError = null;
  const بافر_تک_بار_خواندن_سقف = 64 * 1024;
  const جاری_اتصال_هنوز_معتبر = () => !isCurrentSocket || isCurrentSocket();
  const پایین_رو_فرستنده = ایجاد_پایین_رو_دانه_فرستنده(webSocket, header, جاری_اتصال_هنوز_معتبر);
  header = null;
  const پایین_رو_کنترلر = { [گشا("5YGc5q2i5bm25Yi35paw")]: () => پایین_رو_فرستنده[گشا("5YGc5q2i5bm25Yi35paw")]() };
  if (remoteConnWrapper) remoteConnWrapper.downlinkController = پایین_رو_کنترلر;
  try {
    remoteSocket.closed?.catch?.(() => {});
  } catch (e) {}

  try {
    reader = remoteSocket.readable.getReader({ mode: "byob" });
    useBYOB = true;
  } catch (e) {
    reader = remoteSocket.readable.getReader();
  }

  try {
    if (!useBYOB) {
      while (true) {
        const { done, value } = await reader.read();
        if (!جاری_اتصال_هنوز_معتبر()) break;
        if (done) break;
        if (!value || value.byteLength === 0) continue;
        hasData = true;
        if (value.byteLength >= پایین_رو_دانه_بسته_بایت) {
          await پایین_رو_فرستنده.flush();
          await پایین_رو_فرستنده[گشا("55u05o6l5Y+R6YCB")](value);
        } else {
          await پایین_رو_فرستنده[گشا("5Y+R6YCB")](value);
        }
      }
    } else {
      let readBuffer = new ArrayBuffer(بافر_تک_بار_خواندن_سقف);
      while (true) {
        const { done, value } = await reader.read(new Uint8Array(readBuffer, 0, بافر_تک_بار_خواندن_سقف));
        if (!جاری_اتصال_هنوز_معتبر()) break;
        if (done) break;
        if (!value || value.byteLength === 0) continue;
        hasData = true;
        if (value.byteLength >= پایین_رو_دانه_بسته_بایت) {
          await پایین_رو_فرستنده.flush();
          await پایین_رو_فرستنده[گشا("55u05o6l5Y+R6YCB")](value);
          readBuffer = new ArrayBuffer(بافر_تک_بار_خواندن_سقف);
        } else {
          await پایین_رو_فرستنده[گشا("5Y+R6YCB")](value.slice());
          readBuffer =
            value.buffer.byteLength >= بافر_تک_بار_خواندن_سقف ? value.buffer : new ArrayBuffer(بافر_تک_بار_خواندن_سقف);
        }
      }
    }
    if (جاری_اتصال_هنوز_معتبر()) await پایین_رو_فرستنده.flush();
  } catch (err) {
    readError = err;
  } finally {
    if (جاری_اتصال_هنوز_معتبر() && webSocket.readyState === WebSocket.OPEN) {
      try {
        await پایین_رو_فرستنده[گشا("5YGc5q2i5bm25Yi35paw")]();
      } catch (err) {
        readError ||= err;
      }
    }
    if (remoteConnWrapper?.downlinkController === پایین_رو_کنترلر) remoteConnWrapper.downlinkController = null;
    try {
      await reader.cancel();
    } catch (e) {}
    try {
      reader.releaseLock();
    } catch (e) {}
    try {
      remoteSocket.close();
    } catch (e) {}
  }
  if (!hasData && retryFunc && webSocket.readyState === WebSocket.OPEN && جاری_اتصال_هنوز_معتبر()) {
    try {
      await retryFunc();
      return;
    } catch (err) {
      readError ||= err;
    }
  }
  if (!جاری_اتصال_هنوز_معتبر()) return;
  if (readError) log(`${گشا("W1RDUOS4i+ihjF0g6K+75Y+W5aSx6LSlOiA=")}${readError?.message || readError}`);
  closeSocketQuietly(webSocket);
}

function isSpeedTestSite(hostname) {
  const speedTestDomains = ["speed.cloudflare.com", "cp.cloudflare.com"];
  hostname = hostname.toLowerCase();
  return speedTestDomains.some((domain) => hostname === domain || hostname.endsWith("." + domain));
}

function ساخت_محلی_204_پاسخ(respHeader = null) {
  const محلی_204_پاسخ = new TextEncoder().encode(
    "HTTP/1.1 204 No Content\r\n" + "Content-Length: 0\r\n" + "Connection: close\r\n" + "\r\n",
  );
  if (معتبر_داده_طول(respHeader) === 0) return محلی_204_پاسخ;
  const پروتکل_پاسخ_سرآیند = داده_تبدیل_آرایه_بایتی(respHeader);
  const response = new Uint8Array(پروتکل_پاسخ_سرآیند.byteLength + محلی_204_پاسخ.byteLength);
  response.set(پروتکل_پاسخ_سرآیند, 0);
  response.set(محلی_204_پاسخ, پروتکل_پاسخ_سرآیند.byteLength);
  log(`${گشا("W1RDUOi9rOWPkV0g5p6E6YCg5pys5ZywMjA05ZON5bqUOiA=")}${response.byteLength}B`);
  return response;
}

function ساخت_وب_سوکت_محلی_204_پاسخ(respHeader = null) {
  const وب_سوکت_محلی_204_پاسخ = new TextEncoder().encode(
    "HTTP/1.1 204 No Content\r\n" + "Content-Length: 0\r\n" + "Connection: keep-alive\r\n" + "\r\n",
  );
  if (معتبر_داده_طول(respHeader) === 0) return وب_سوکت_محلی_204_پاسخ;
  const پروتکل_پاسخ_سرآیند = داده_تبدیل_آرایه_بایتی(respHeader);
  const response = new Uint8Array(پروتکل_پاسخ_سرآیند.byteLength + وب_سوکت_محلی_204_پاسخ.byteLength);
  response.set(پروتکل_پاسخ_سرآیند, 0);
  response.set(وب_سوکت_محلی_204_پاسخ, پروتکل_پاسخ_سرآیند.byteLength);
  return response;
}

// ===== توابع میانجی =====
async function اتصال_میانجی(targetHost, targetPort, initialData, تی_سی_پی_اتصال, میانجی_تحلیل_شده) {
  const { username, password, hostname, port } = میانجی_تحلیل_شده || {};
  const socket = تی_سی_پی_اتصال({ hostname, port }),
    writer = socket.writable.getWriter(),
    reader = socket.readable.getReader();
  try {
    const authMethods =
      username && password ? new Uint8Array([0x05, 0x02, 0x00, 0x02]) : new Uint8Array([0x05, 0x01, 0x00]);
    await writer.write(authMethods);
    let response = await reader.read();
    if (response.done || response.value.byteLength < 2) throw new Error("S5 method selection failed");

    const selectedMethod = new Uint8Array(response.value)[1];
    if (selectedMethod === 0x02) {
      if (!username || !password) throw new Error("S5 requires authentication");
      const userBytes = new TextEncoder().encode(username),
        passBytes = new TextEncoder().encode(password);
      const authPacket = new Uint8Array([0x01, userBytes.length, ...userBytes, passBytes.length, ...passBytes]);
      await writer.write(authPacket);
      response = await reader.read();
      if (response.done || new Uint8Array(response.value)[1] !== 0x00) throw new Error("S5 authentication failed");
    } else if (selectedMethod !== 0x00) throw new Error(`S5 unsupported auth method: ${selectedMethod}`);

    const hostBytes = new TextEncoder().encode(targetHost);
    const connectPacket = new Uint8Array([
      0x05,
      0x01,
      0x00,
      0x03,
      hostBytes.length,
      ...hostBytes,
      targetPort >> 8,
      targetPort & 0xff,
    ]);
    await writer.write(connectPacket);
    response = await reader.read();
    if (response.done || new Uint8Array(response.value)[1] !== 0x00) throw new Error("S5 connection failed");

    if (معتبر_داده_طول(initialData) > 0) await writer.write(initialData);
    writer.releaseLock();
    reader.releaseLock();
    return socket;
  } catch (error) {
    try {
      writer.releaseLock();
    } catch (e) {}
    try {
      reader.releaseLock();
    } catch (e) {}
    try {
      socket.close();
    } catch (e) {}
    throw error;
  }
}

async function httpConnect(
  targetHost,
  targetPort,
  initialData,
  اچ_تی_تی_پی_امن_میانجی = false,
  تی_سی_پی_اتصال,
  میانجی_تحلیل_شده,
) {
  const { username, password, hostname, port } = میانجی_تحلیل_شده || {};
  const socket = اچ_تی_تی_پی_امن_میانجی
    ? تی_سی_پی_اتصال({ hostname, port }, { secureTransport: "on", allowHalfOpen: false })
    : تی_سی_پی_اتصال({ hostname, port });
  const writer = socket.writable.getWriter(),
    reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  try {
    if (اچ_تی_تی_پی_امن_میانجی) await socket.opened;

    const auth =
      username && password
        ? `${گشا("UHJveHktQXV0aG9yaXphdGlvbjogQmFzaWMg")}${btoa(`${username}:${password}`)}\r\n`
        : "";
    const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\nHost: ${targetHost}:${targetPort}\r\n${auth}User-Agent: Mozilla/5.0\r\nConnection: keep-alive\r\n\r\n`;
    await writer.write(encoder.encode(request));
    writer.releaseLock();

    let responseBuffer = new Uint8Array(0),
      headerEndIndex = -1,
      bytesRead = 0;
    while (headerEndIndex === -1 && bytesRead < 8192) {
      const { done, value } = await reader.read();
      if (done || !value)
        throw new Error(
          `${اچ_تی_تی_پی_امن_میانجی ? "HTTPS" : "HTTP"}${گشا("IOS7o+eQhuWcqOi/lOWbniBDT05ORUNUIOWTjeW6lOWJjeWFs+mXrei/nuaOpQ==")}`,
        );
      responseBuffer = new Uint8Array([...responseBuffer, ...value]);
      bytesRead = responseBuffer.length;
      const crlfcrlf = responseBuffer.findIndex(
        (_, i) =>
          i < responseBuffer.length - 3 &&
          responseBuffer[i] === 0x0d &&
          responseBuffer[i + 1] === 0x0a &&
          responseBuffer[i + 2] === 0x0d &&
          responseBuffer[i + 3] === 0x0a,
      );
      if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
    }

    if (headerEndIndex === -1) throw new Error(گشا("5Luj55CGIENPTk5FQ1Qg5ZON5bqU5aS06L+H6ZW/5oiW5peg5pWI"));
    const statusMatch = decoder
      .decode(responseBuffer.slice(0, headerEndIndex))
      .split("\r\n")[0]
      .match(/HTTP\/\d\.\d\s+(\d+)/);
    const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
    if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300)
      throw new Error(`Connection failed: HTTP ${statusCode}`);

    reader.releaseLock();

    if (معتبر_داده_طول(initialData) > 0) {
      const دور_نویسنده = socket.writable.getWriter();
      await دور_نویسنده.write(initialData);
      دور_نویسنده.releaseLock();
    }

    //
    if (bytesRead > headerEndIndex) {
      const { readable, writable } = new TransformStream();
      const transformWriter = writable.getWriter();
      await transformWriter.write(responseBuffer.subarray(headerEndIndex, bytesRead));
      transformWriter.releaseLock();
      socket.readable.pipeTo(writable).catch(() => {});
      return { readable, writable: socket.writable, closed: socket.closed, close: () => socket.close() };
    }

    return socket;
  } catch (error) {
    try {
      writer.releaseLock();
    } catch (e) {}
    try {
      reader.releaseLock();
    } catch (e) {}
    try {
      socket.close();
    } catch (e) {}
    throw error;
  }
}

async function httpsConnect(targetHost, targetPort, initialData, تی_سی_پی_اتصال, میانجی_تحلیل_شده) {
  const { username, password, hostname, port } = میانجی_تحلیل_شده || {};
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let tlsSocket = null;
  const tlsServerName = isIPHostname(hostname) ? "" : stripIPv6Brackets(hostname);
  const بازکردن_اچ_تی_تی_پی_امن_میانجی_لایه_امن = async (allowChacha = false) => {
    const سوکت_میانجی = تی_سی_پی_اتصال({ hostname, port });
    try {
      await سوکت_میانجی.opened;
      const socket = new TlsClient(سوکت_میانجی, { serverName: tlsServerName, insecure: true, allowChacha });
      await socket.handshake();
      log(
        `${گشا("W0hUVFBT5Luj55CGXSBUTFPniYjmnKw6IA==")}${socket.isTls13 ? "1.3" : "1.2"} | Cipher: 0x${socket.cipherSuite.toString(16)}${socket.cipherConfig?.chacha ? " (ChaCha20)" : " (AES-GCM)"}`,
      );
      return socket;
    } catch (error) {
      try {
        سوکت_میانجی.close();
      } catch (e) {}
      throw error;
    }
  };
  try {
    try {
      tlsSocket = await بازکردن_اچ_تی_تی_پی_امن_میانجی_لایه_امن(false);
    } catch (error) {
      if (
        !/cipher|handshake|TLS Alert|ServerHello|Finished|Unsupported|Missing TLS/i.test(
          error?.message || `${error || ""}`,
        )
      )
        throw error;
      log(
        `${گشا("W0hUVFBT5Luj55CGXSBBRVMtR0NNIFRMUyDmj6HmiYvlpLHotKXvvIzlm57pgIAgQ2hhQ2hhMjAg5YW85a655qih5byPOiA=")}${error?.message || error}`,
      );
      tlsSocket = await بازکردن_اچ_تی_تی_پی_امن_میانجی_لایه_امن(true);
    }

    const auth =
      username && password
        ? `${گشا("UHJveHktQXV0aG9yaXphdGlvbjogQmFzaWMg")}${btoa(`${username}:${password}`)}\r\n`
        : "";
    const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\nHost: ${targetHost}:${targetPort}\r\n${auth}User-Agent: Mozilla/5.0\r\nConnection: keep-alive\r\n\r\n`;
    await tlsSocket.write(encoder.encode(request));

    let responseBuffer = new Uint8Array(0),
      headerEndIndex = -1,
      bytesRead = 0;
    while (headerEndIndex === -1 && bytesRead < 8192) {
      const value = await tlsSocket.read();
      if (!value) throw new Error(گشا("SFRUUFMg5Luj55CG5Zyo6L+U5ZueIENPTk5FQ1Qg5ZON5bqU5YmN5YWz6Zet6L+e5o6l"));
      responseBuffer = پیوند_بایت_داده(responseBuffer, value);
      bytesRead = responseBuffer.length;
      const crlfcrlf = responseBuffer.findIndex(
        (_, i) =>
          i < responseBuffer.length - 3 &&
          responseBuffer[i] === 0x0d &&
          responseBuffer[i + 1] === 0x0a &&
          responseBuffer[i + 2] === 0x0d &&
          responseBuffer[i + 3] === 0x0a,
      );
      if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
    }

    if (headerEndIndex === -1) throw new Error(گشا("SFRUUFMg5Luj55CGIENPTk5FQ1Qg5ZON5bqU5aS06L+H6ZW/5oiW5peg5pWI"));
    const statusMatch = decoder
      .decode(responseBuffer.slice(0, headerEndIndex))
      .split("\r\n")[0]
      .match(/HTTP\/\d\.\d\s+(\d+)/);
    const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
    if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300)
      throw new Error(`Connection failed: HTTP ${statusCode}`);

    if (معتبر_داده_طول(initialData) > 0) await tlsSocket.write(داده_تبدیل_آرایه_بایتی(initialData));
    const bufferedData = bytesRead > headerEndIndex ? responseBuffer.subarray(headerEndIndex, bytesRead) : null;
    let closedSettled = false,
      resolveClosed,
      rejectClosed;
    const settleClosed = (settle, value) => {
      if (!closedSettled) {
        closedSettled = true;
        settle(value);
      }
    };
    const closed = new Promise((resolve, reject) => {
      resolveClosed = resolve;
      rejectClosed = reject;
    });
    const close = () => {
      try {
        tlsSocket.close();
      } catch (e) {}
      settleClosed(resolveClosed);
    };
    const readable = new ReadableStream({
      async start(controller) {
        try {
          if (معتبر_داده_طول(bufferedData) > 0) controller.enqueue(bufferedData);
          while (true) {
            const data = await tlsSocket.read();
            if (!data) break;
            if (data.byteLength > 0) controller.enqueue(data);
          }
          try {
            controller.close();
          } catch (e) {}
          settleClosed(resolveClosed);
        } catch (error) {
          try {
            controller.error(error);
          } catch (e) {}
          settleClosed(rejectClosed, error);
        }
      },
      cancel() {
        close();
      },
    });
    const writable = new WritableStream({
      async write(chunk) {
        await tlsSocket.write(داده_تبدیل_آرایه_بایتی(chunk));
      },
      close,
      abort(error) {
        close();
        if (error) settleClosed(rejectClosed, error);
      },
    });
    return { readable, writable, closed, close };
  } catch (error) {
    try {
      tlsSocket?.close();
    } catch (e) {}
    throw error;
  }
}

function ایجاد_درخواست_تی_سی_پی_اتصال_دهنده(request) {
  const شیء_درخواست = /**/ request;
  const fetcher = شیء_درخواست?.fetcher;
  if (!fetcher || typeof fetcher.connect !== "function") throw new Error("request.fetcher.connect unavailable");
  return (options, init) => (init === undefined ? fetcher.connect(options) : fetcher.connect(options, init));
}
// ===== بخش =====
const TLS_VERSION_10 = 769,
  TLS_VERSION_12 = 771,
  TLS_VERSION_13 = 772;
const CONTENT_TYPE_CHANGE_CIPHER_SPEC = 20,
  CONTENT_TYPE_ALERT = 21,
  CONTENT_TYPE_HANDSHAKE = 22,
  CONTENT_TYPE_APPLICATION_DATA = 23;
const HANDSHAKE_TYPE_CLIENT_HELLO = 1,
  HANDSHAKE_TYPE_SERVER_HELLO = 2,
  HANDSHAKE_TYPE_NEW_SESSION_TICKET = 4,
  HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS = 8,
  HANDSHAKE_TYPE_CERTIFICATE = 11,
  HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE = 12,
  HANDSHAKE_TYPE_CERTIFICATE_REQUEST = 13,
  HANDSHAKE_TYPE_SERVER_HELLO_DONE = 14,
  HANDSHAKE_TYPE_CERTIFICATE_VERIFY = 15,
  HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE = 16,
  HANDSHAKE_TYPE_FINISHED = 20,
  HANDSHAKE_TYPE_KEY_UPDATE = 24;
const EXT_SERVER_NAME = 0,
  EXT_SUPPORTED_GROUPS = 10,
  EXT_EC_POINT_FORMATS = 11,
  EXT_SIGNATURE_ALGORITHMS = 13,
  EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION = 16,
  EXT_SUPPORTED_VERSIONS = 43,
  EXT_PSK_KEY_EXCHANGE_MODES = 45,
  EXT_KEY_SHARE = 51;

const ALERT_CLOSE_NOTIFY = 0,
  ALERT_LEVEL_WARNING = 1,
  ALERT_UNRECOGNIZED_NAME = 112;
const shouldIgnoreTlsAlert = (fragment) =>
  fragment?.[0] === ALERT_LEVEL_WARNING && fragment?.[1] === ALERT_UNRECOGNIZED_NAME;

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const EMPTY_BYTES = new Uint8Array(0);

const CIPHER_SUITES_BY_ID = new Map([
  [4865, { id: 4865, keyLen: 16, ivLen: 12, hash: "SHA-256", tls13: !0 }],
  [4866, { id: 4866, keyLen: 32, ivLen: 12, hash: "SHA-384", tls13: !0 }],
  [4867, { id: 4867, keyLen: 32, ivLen: 12, hash: "SHA-256", tls13: !0, chacha: !0 }],
  [49199, { id: 49199, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
  [49200, { id: 49200, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
  [52392, { id: 52392, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: !0 }],
  [49195, { id: 49195, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
  [49196, { id: 49196, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
  [52393, { id: 52393, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: !0 }],
]);
const GROUPS_BY_ID = new Map([
  [29, "X25519"],
  [23, "P-256"],
]);
const SUPPORTED_SIGNATURE_ALGORITHMS = [2052, 2053, 2054, 1025, 1281, 1537, 1027, 1283, 1539];

const tlsBytes = (...parts) => {
  const flattenBytes = (values) =>
    values.flatMap((value) =>
      value instanceof Uint8Array
        ? [...value]
        : Array.isArray(value)
          ? flattenBytes(value)
          : "number" == typeof value
            ? [value]
            : [],
    );
  return new Uint8Array(flattenBytes(parts));
};
const uint16be = (value) => [(value >> 8) & 255, 255 & value];
const readUint16 = (buffer, offset) => (buffer[offset] << 8) | buffer[offset + 1];
const readUint24 = (buffer, offset) => (buffer[offset] << 16) | (buffer[offset + 1] << 8) | buffer[offset + 2];
const concatBytes = (...chunks) => {
  const nonEmptyChunks = chunks.filter((chunk) => chunk && chunk.length > 0),
    length = nonEmptyChunks.reduce((total, chunk) => total + chunk.length, 0),
    result = new Uint8Array(length);
  let offset = 0;
  for (const chunk of nonEmptyChunks) (result.set(chunk, offset), (offset += chunk.length));
  return result;
};
const randomBytes = (length) => crypto.getRandomValues(new Uint8Array(length));
const constantTimeEqual = (left, right) => {
  if (!left || !right || left.length !== right.length) return !1;
  let diff = 0;
  for (let index = 0; index < left.length; index++) diff |= left[index] ^ right[index];
  return 0 === diff;
};
const hashByteLength = (hash) => ("SHA-512" === hash ? 64 : "SHA-384" === hash ? 48 : 32);
async function hmac(hash, key, data) {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash }, !1, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", cryptoKey, data));
}
async function digestBytes(hash, data) {
  return new Uint8Array(await crypto.subtle.digest(hash, data));
}
async function tls12Prf(secret, label, seed, length, hash = "SHA-256") {
  const labelSeed = concatBytes(textEncoder.encode(label), seed);
  let output = new Uint8Array(0),
    currentA = labelSeed;
  for (; output.length < length;) {
    currentA = await hmac(hash, secret, currentA);
    const block = await hmac(hash, secret, concatBytes(currentA, labelSeed));
    output = concatBytes(output, block);
  }
  return output.slice(0, length);
}
async function hkdfExtract(hash, salt, inputKeyMaterial) {
  return ((salt && salt.length) || (salt = new Uint8Array(hashByteLength(hash))), hmac(hash, salt, inputKeyMaterial));
}
async function hkdfExpandLabel(hash, secret, label, context, length) {
  const fullLabel = textEncoder.encode("tls13 " + label);
  return (async function (hash, secret, info, length) {
    const hashLen = hashByteLength(hash),
      roundCount = Math.ceil(length / hashLen);
    let output = new Uint8Array(0),
      previousBlock = new Uint8Array(0);
    for (let round = 1; round <= roundCount; round++)
      ((previousBlock = await hmac(hash, secret, concatBytes(previousBlock, info, [round]))),
        (output = concatBytes(output, previousBlock)));
    return output.slice(0, length);
  })(hash, secret, tlsBytes(uint16be(length), fullLabel.length, fullLabel, context.length, context), length);
}
async function generateKeyShare(group = "P-256") {
  const algorithm = "X25519" === group ? { name: "X25519" } : { name: "ECDH", namedCurve: group };
  const keyPair = /**/ await crypto.subtle.generateKey(algorithm, !0, ["deriveBits"]);
  const publicKeyRaw = /**/ await crypto.subtle.exportKey("raw", keyPair.publicKey);
  return { keyPair, publicKeyRaw: new Uint8Array(publicKeyRaw) };
}
async function deriveSharedSecret(privateKey, peerPublicKey, group = "P-256") {
  const algorithm = "X25519" === group ? { name: "X25519" } : { name: "ECDH", namedCurve: group },
    peerKey = await crypto.subtle.importKey("raw", peerPublicKey, algorithm, !1, []),
    bits = "P-384" === group ? 384 : "P-521" === group ? 528 : 256;
  return new Uint8Array(
    await crypto.subtle.deriveBits(/**/ { name: algorithm.name, public: peerKey }, privateKey, bits),
  );
}
async function importAesGcmKey(key, usages) {
  return crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, !1, usages);
}
async function aesGcmEncryptWithKey(cryptoKey, initializationVector, plaintext, additionalData) {
  return new Uint8Array(
    await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: initializationVector, additionalData, tagLength: 128 },
      cryptoKey,
      plaintext,
    ),
  );
}
async function aesGcmDecryptWithKey(cryptoKey, initializationVector, ciphertext, additionalData) {
  return new Uint8Array(
    await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: initializationVector, additionalData, tagLength: 128 },
      cryptoKey,
      ciphertext,
    ),
  );
}

function rotateLeft32(value, bits) {
  return ((value << bits) | (value >>> (32 - bits))) >>> 0;
}

function chachaQuarterRound(state, indexA, indexB, indexC, indexD) {
  ((state[indexA] = (state[indexA] + state[indexB]) >>> 0),
    (state[indexD] = rotateLeft32(state[indexD] ^ state[indexA], 16)),
    (state[indexC] = (state[indexC] + state[indexD]) >>> 0),
    (state[indexB] = rotateLeft32(state[indexB] ^ state[indexC], 12)),
    (state[indexA] = (state[indexA] + state[indexB]) >>> 0),
    (state[indexD] = rotateLeft32(state[indexD] ^ state[indexA], 8)),
    (state[indexC] = (state[indexC] + state[indexD]) >>> 0),
    (state[indexB] = rotateLeft32(state[indexB] ^ state[indexC], 7)));
}

function chacha20Block(key, counter, nonce) {
  const state = new Uint32Array(16);
  ((state[0] = 1634760805), (state[1] = 857760878), (state[2] = 2036477234), (state[3] = 1797285236));
  const keyView = new DataView(key.buffer, key.byteOffset, key.byteLength);
  for (let wordIndex = 0; wordIndex < 8; wordIndex++) state[4 + wordIndex] = keyView.getUint32(4 * wordIndex, !0);
  state[12] = counter;
  const nonceView = new DataView(nonce.buffer, nonce.byteOffset, nonce.byteLength);
  ((state[13] = nonceView.getUint32(0, !0)),
    (state[14] = nonceView.getUint32(4, !0)),
    (state[15] = nonceView.getUint32(8, !0)));
  const workingState = new Uint32Array(state);
  for (let round = 0; round < 10; round++)
    (chachaQuarterRound(workingState, 0, 4, 8, 12),
      chachaQuarterRound(workingState, 1, 5, 9, 13),
      chachaQuarterRound(workingState, 2, 6, 10, 14),
      chachaQuarterRound(workingState, 3, 7, 11, 15),
      chachaQuarterRound(workingState, 0, 5, 10, 15),
      chachaQuarterRound(workingState, 1, 6, 11, 12),
      chachaQuarterRound(workingState, 2, 7, 8, 13),
      chachaQuarterRound(workingState, 3, 4, 9, 14));
  for (let wordIndex = 0; wordIndex < 16; wordIndex++)
    workingState[wordIndex] = (workingState[wordIndex] + state[wordIndex]) >>> 0;
  return new Uint8Array(workingState.buffer.slice(0));
}

function chacha20Xor(key, nonce, data) {
  const output = new Uint8Array(data.length);
  let counter = 1;
  for (let offset = 0; offset < data.length; offset += 64) {
    const block = chacha20Block(key, counter++, nonce),
      blockLength = Math.min(64, data.length - offset);
    for (let index = 0; index < blockLength; index++) output[offset + index] = data[offset + index] ^ block[index];
  }
  return output;
}

function poly1305Mac(key, message) {
  const rKey = (function (rBytes) {
      const clamped = new Uint8Array(rBytes);
      return (
        (clamped[3] &= 15),
        (clamped[7] &= 15),
        (clamped[11] &= 15),
        (clamped[15] &= 15),
        (clamped[4] &= 252),
        (clamped[8] &= 252),
        (clamped[12] &= 252),
        clamped
      );
    })(key.slice(0, 16)),
    sKey = key.slice(16, 32);
  let accumulator = [0n, 0n, 0n, 0n, 0n];
  const rLimbs = [
    0x3ffffffn & BigInt(rKey[0] | (rKey[1] << 8) | (rKey[2] << 16) | (rKey[3] << 24)),
    0x3ffffffn & BigInt((rKey[3] >> 2) | (rKey[4] << 6) | (rKey[5] << 14) | (rKey[6] << 22)),
    0x3ffffffn & BigInt((rKey[6] >> 4) | (rKey[7] << 4) | (rKey[8] << 12) | (rKey[9] << 20)),
    0x3ffffffn & BigInt((rKey[9] >> 6) | (rKey[10] << 2) | (rKey[11] << 10) | (rKey[12] << 18)),
    0x3ffffffn & BigInt(rKey[13] | (rKey[14] << 8) | (rKey[15] << 16)),
  ];
  for (let offset = 0; offset < message.length; offset += 16) {
    const chunk = message.slice(offset, offset + 16),
      paddedChunk = new Uint8Array(17);
    (paddedChunk.set(chunk),
      (paddedChunk[chunk.length] = 1),
      (accumulator[0] += BigInt(
        paddedChunk[0] | (paddedChunk[1] << 8) | (paddedChunk[2] << 16) | ((3 & paddedChunk[3]) << 24),
      )),
      (accumulator[1] += BigInt(
        (paddedChunk[3] >> 2) | (paddedChunk[4] << 6) | (paddedChunk[5] << 14) | ((15 & paddedChunk[6]) << 22),
      )),
      (accumulator[2] += BigInt(
        (paddedChunk[6] >> 4) | (paddedChunk[7] << 4) | (paddedChunk[8] << 12) | ((63 & paddedChunk[9]) << 20),
      )),
      (accumulator[3] += BigInt(
        (paddedChunk[9] >> 6) | (paddedChunk[10] << 2) | (paddedChunk[11] << 10) | (paddedChunk[12] << 18),
      )),
      (accumulator[4] += BigInt(
        paddedChunk[13] | (paddedChunk[14] << 8) | (paddedChunk[15] << 16) | (paddedChunk[16] << 24),
      )));
    const product = [0n, 0n, 0n, 0n, 0n];
    for (let accIndex = 0; accIndex < 5; accIndex++)
      for (let rIndex = 0; rIndex < 5; rIndex++) {
        const limbIndex = accIndex + rIndex;
        limbIndex < 5
          ? (product[limbIndex] += accumulator[accIndex] * rLimbs[rIndex])
          : (product[limbIndex - 5] += accumulator[accIndex] * rLimbs[rIndex] * 5n);
      }
    let carry = 0n;
    for (let index = 0; index < 5; index++)
      ((product[index] += carry), (accumulator[index] = 0x3ffffffn & product[index]), (carry = product[index] >> 26n));
    ((accumulator[0] += 5n * carry),
      (carry = accumulator[0] >> 26n),
      (accumulator[0] &= 0x3ffffffn),
      (accumulator[1] += carry));
  }
  let tagValue =
    accumulator[0] |
    (accumulator[1] << 26n) |
    (accumulator[2] << 52n) |
    (accumulator[3] << 78n) |
    (accumulator[4] << 104n);
  tagValue =
    (tagValue + sKey.reduce((total, byte, index) => total + (BigInt(byte) << BigInt(8 * index)), 0n)) &
    ((1n << 128n) - 1n);
  const tag = new Uint8Array(16);
  for (let index = 0; index < 16; index++) tag[index] = Number((tagValue >> BigInt(8 * index)) & 0xffn);
  return tag;
}

function chacha20Poly1305Encrypt(key, nonce, plaintext, additionalData) {
  const polyKey = chacha20Block(key, 0, nonce).slice(0, 32),
    ciphertext = chacha20Xor(key, nonce, plaintext),
    aadPadding = (16 - (additionalData.length % 16)) % 16,
    ciphertextPadding = (16 - (ciphertext.length % 16)) % 16,
    macData = new Uint8Array(additionalData.length + aadPadding + ciphertext.length + ciphertextPadding + 16);
  (macData.set(additionalData, 0), macData.set(ciphertext, additionalData.length + aadPadding));
  const lengthView = new DataView(
    macData.buffer,
    additionalData.length + aadPadding + ciphertext.length + ciphertextPadding,
  );
  (lengthView.setBigUint64(0, BigInt(additionalData.length), !0),
    lengthView.setBigUint64(8, BigInt(ciphertext.length), !0));
  const tag = poly1305Mac(polyKey, macData);
  return concatBytes(ciphertext, tag);
}

function chacha20Poly1305Decrypt(key, nonce, ciphertext, additionalData) {
  if (ciphertext.length < 16) throw new Error("Ciphertext too short");
  const tag = ciphertext.slice(-16),
    encryptedData = ciphertext.slice(0, -16),
    polyKey = chacha20Block(key, 0, nonce).slice(0, 32),
    aadPadding = (16 - (additionalData.length % 16)) % 16,
    ciphertextPadding = (16 - (encryptedData.length % 16)) % 16,
    macData = new Uint8Array(additionalData.length + aadPadding + encryptedData.length + ciphertextPadding + 16);
  (macData.set(additionalData, 0), macData.set(encryptedData, additionalData.length + aadPadding));
  const lengthView = new DataView(
    macData.buffer,
    additionalData.length + aadPadding + encryptedData.length + ciphertextPadding,
  );
  (lengthView.setBigUint64(0, BigInt(additionalData.length), !0),
    lengthView.setBigUint64(8, BigInt(encryptedData.length), !0));
  const expectedTag = poly1305Mac(polyKey, macData);
  let diff = 0;
  for (let index = 0; index < 16; index++) diff |= tag[index] ^ expectedTag[index];
  if (0 !== diff) throw new Error("ChaCha20-Poly1305 authentication failed");
  return chacha20Xor(key, nonce, encryptedData);
}

const TLS_MAX_PLAINTEXT_FRAGMENT = 16 * 1024;
function buildTlsRecord(contentType, fragment, version = TLS_VERSION_12) {
  const data = داده_تبدیل_آرایه_بایتی(fragment);
  const record = new Uint8Array(5 + data.byteLength);
  record[0] = contentType;
  record[1] = (version >> 8) & 255;
  record[2] = version & 255;
  record[3] = (data.byteLength >> 8) & 255;
  record[4] = data.byteLength & 255;
  record.set(data, 5);
  return record;
}
function buildHandshakeMessage(handshakeType, body) {
  return tlsBytes(
    handshakeType,
    ((length) => [(length >> 16) & 255, (length >> 8) & 255, 255 & length])(body.length),
    body,
  );
}
class TlsRecordParser {
  constructor() {
    this.buffer = new Uint8Array(0);
  }
  feed(chunk) {
    const bytes = داده_تبدیل_آرایه_بایتی(chunk);
    this.buffer = this.buffer.length ? concatBytes(this.buffer, bytes) : bytes;
  }
  next() {
    if (this.buffer.length < 5) return null;
    const contentType = this.buffer[0],
      version = readUint16(this.buffer, 1),
      length = readUint16(this.buffer, 3);
    if (this.buffer.length < 5 + length) return null;
    const fragment = this.buffer.subarray(5, 5 + length);
    return ((this.buffer = this.buffer.subarray(5 + length)), { type: contentType, version, length, fragment });
  }
}
class TlsHandshakeParser {
  constructor() {
    this.buffer = new Uint8Array(0);
  }
  feed(chunk) {
    const bytes = داده_تبدیل_آرایه_بایتی(chunk);
    this.buffer = this.buffer.length ? concatBytes(this.buffer, bytes) : bytes;
  }
  next() {
    if (this.buffer.length < 4) return null;
    const handshakeType = this.buffer[0],
      length = readUint24(this.buffer, 1);
    if (this.buffer.length < 4 + length) return null;
    const body = this.buffer.subarray(4, 4 + length),
      raw = this.buffer.subarray(0, 4 + length);
    return ((this.buffer = this.buffer.subarray(4 + length)), { type: handshakeType, length, body, raw });
  }
}

function parseServerHello(body) {
  let offset = 0;
  const legacyVersion = readUint16(body, offset);
  offset += 2;
  const serverRandom = body.slice(offset, offset + 32);
  offset += 32;
  const sessionIdLength = body[offset++],
    sessionId = body.slice(offset, offset + sessionIdLength);
  offset += sessionIdLength;
  const cipherSuite = readUint16(body, offset);
  offset += 2;
  const compression = body[offset++];
  let selectedVersion = legacyVersion,
    keyShare = null,
    alpn = null;
  if (offset < body.length) {
    const extensionsLength = readUint16(body, offset);
    offset += 2;
    const extensionsEnd = offset + extensionsLength;
    for (; offset + 4 <= extensionsEnd;) {
      const extensionType = readUint16(body, offset);
      offset += 2;
      const extensionLength = readUint16(body, offset);
      offset += 2;
      const extensionData = body.slice(offset, offset + extensionLength);
      if (((offset += extensionLength), extensionType === EXT_SUPPORTED_VERSIONS && extensionLength >= 2))
        selectedVersion = readUint16(extensionData, 0);
      else if (extensionType === EXT_KEY_SHARE && extensionLength >= 4) {
        const group = readUint16(extensionData, 0),
          keyLength = readUint16(extensionData, 2);
        keyShare = { group, key: extensionData.slice(4, 4 + keyLength) };
      } else
        extensionType === EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION &&
          extensionLength >= 3 &&
          (alpn = textDecoder.decode(extensionData.slice(3, 3 + extensionData[2])));
    }
  }
  const helloRetryRequestRandom = new Uint8Array([
    207, 33, 173, 116, 229, 154, 97, 17, 190, 29, 140, 2, 30, 101, 184, 145, 194, 162, 17, 22, 122, 187, 140, 94, 7,
    158, 9, 226, 200, 168, 51, 156,
  ]);
  return {
    version: legacyVersion,
    serverRandom,
    sessionId,
    cipherSuite,
    compression,
    selectedVersion,
    keyShare,
    alpn,
    isHRR: constantTimeEqual(serverRandom, helloRetryRequestRandom),
    isTls13: selectedVersion === TLS_VERSION_13,
  };
}

function parseServerKeyExchange(body) {
  let offset = 1;
  const namedCurve = readUint16(body, offset);
  offset += 2;
  const keyLength = body[offset++];
  return { namedCurve, serverPublicKey: body.slice(offset, offset + keyLength) };
}

function extractLeafCertificate(body, hasContext = 0) {
  let offset = 0;
  if (hasContext) {
    const contextLength = body[offset++];
    offset += contextLength;
  }
  if (offset + 3 > body.length) return null;
  const certificateListLength = readUint24(body, offset);
  if (((offset += 3), !certificateListLength || offset + 3 > body.length)) return null;
  const certificateLength = readUint24(body, offset);
  return ((offset += 3), certificateLength ? body.slice(offset, offset + certificateLength) : null);
}

function parseEncryptedExtensions(body) {
  const parsed = { alpn: null };
  let offset = 2;
  const extensionsEnd = 2 + readUint16(body, 0);
  for (; offset + 4 <= extensionsEnd;) {
    const extensionType = readUint16(body, offset);
    offset += 2;
    const extensionLength = readUint16(body, offset);
    if (((offset += 2), extensionType === EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION && extensionLength >= 3)) {
      const protocolLength = body[offset + 2];
      protocolLength > 0 &&
        offset + 3 + protocolLength <= offset + extensionLength &&
        (parsed.alpn = textDecoder.decode(body.slice(offset + 3, offset + 3 + protocolLength)));
    }
    offset += extensionLength;
  }
  return parsed;
}

function buildClientHello(
  clientRandom,
  serverName,
  keyShares,
  { tls13: enableTls13 = !0, tls12: enableTls12 = !0, alpn = null, chacha = !0 } = {},
) {
  const cipherIds = [];
  (enableTls13 && cipherIds.push(4865, 4866, ...(chacha ? [4867] : [])),
    enableTls12 && cipherIds.push(49199, 49200, 49195, 49196, ...(chacha ? [52392, 52393] : [])));
  const cipherBytes = tlsBytes(...cipherIds.flatMap(uint16be)),
    extensions = [tlsBytes(255, 1, 0, 1, 0)];
  if (serverName) {
    const serverNameBytes = textEncoder.encode(serverName),
      serverNameList = tlsBytes(0, uint16be(serverNameBytes.length), serverNameBytes);
    extensions.push(
      tlsBytes(
        uint16be(EXT_SERVER_NAME),
        uint16be(serverNameList.length + 2),
        uint16be(serverNameList.length),
        serverNameList,
      ),
    );
  }
  (extensions.push(tlsBytes(uint16be(EXT_EC_POINT_FORMATS), 0, 2, 1, 0)),
    extensions.push(tlsBytes(uint16be(EXT_SUPPORTED_GROUPS), 0, 6, 0, 4, 0, 29, 0, 23)));
  const signatureBytes = tlsBytes(...SUPPORTED_SIGNATURE_ALGORITHMS.flatMap(uint16be));
  extensions.push(
    tlsBytes(
      uint16be(EXT_SIGNATURE_ALGORITHMS),
      uint16be(signatureBytes.length + 2),
      uint16be(signatureBytes.length),
      signatureBytes,
    ),
  );
  const protocols = Array.isArray(alpn) ? alpn.filter(Boolean) : alpn ? [alpn] : [];
  if (protocols.length) {
    const alpnBytes = concatBytes(
      ...protocols.map((protocol) => {
        const protocolBytes = textEncoder.encode(protocol);
        return tlsBytes(protocolBytes.length, protocolBytes);
      }),
    );
    extensions.push(
      tlsBytes(
        uint16be(EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION),
        uint16be(alpnBytes.length + 2),
        uint16be(alpnBytes.length),
        alpnBytes,
      ),
    );
  }
  if (enableTls13 && keyShares) {
    let keyShareBytes;
    if (
      (extensions.push(
        enableTls12
          ? tlsBytes(uint16be(EXT_SUPPORTED_VERSIONS), 0, 5, 4, 3, 4, 3, 3)
          : tlsBytes(uint16be(EXT_SUPPORTED_VERSIONS), 0, 3, 2, 3, 4),
      ),
      extensions.push(tlsBytes(uint16be(EXT_PSK_KEY_EXCHANGE_MODES), 0, 2, 1, 1)),
      keyShares?.x25519 && keyShares?.p256)
    )
      keyShareBytes = concatBytes(
        tlsBytes(0, 29, uint16be(keyShares.x25519.length), keyShares.x25519),
        tlsBytes(0, 23, uint16be(keyShares.p256.length), keyShares.p256),
      );
    else if (keyShares?.x25519) keyShareBytes = tlsBytes(0, 29, uint16be(keyShares.x25519.length), keyShares.x25519);
    else if (keyShares?.p256) keyShareBytes = tlsBytes(0, 23, uint16be(keyShares.p256.length), keyShares.p256);
    else {
      if (!(keyShares instanceof Uint8Array)) throw new Error("Invalid keyShares");
      keyShareBytes = tlsBytes(0, 23, uint16be(keyShares.length), keyShares);
    }
    extensions.push(
      tlsBytes(
        uint16be(EXT_KEY_SHARE),
        uint16be(keyShareBytes.length + 2),
        uint16be(keyShareBytes.length),
        keyShareBytes,
      ),
    );
  }
  const extensionsBytes = concatBytes(...extensions);
  return buildHandshakeMessage(
    HANDSHAKE_TYPE_CLIENT_HELLO,
    tlsBytes(
      uint16be(TLS_VERSION_12),
      clientRandom,
      0,
      uint16be(cipherBytes.length),
      cipherBytes,
      1,
      0,
      uint16be(extensionsBytes.length),
      extensionsBytes,
    ),
  );
}
const uint64be = (sequenceNumber) => {
    const bytes = new Uint8Array(8);
    return (new DataView(bytes.buffer).setBigUint64(0, sequenceNumber, !1), bytes);
  },
  xorSequenceIntoIv = (initializationVector, sequenceNumber) => {
    const nonce = initializationVector.slice(),
      sequenceBytes = uint64be(sequenceNumber);
    for (let index = 0; index < 8; index++) nonce[nonce.length - 8 + index] ^= sequenceBytes[index];
    return nonce;
  },
  deriveTrafficKeys = (hash, secret, keyLen, ivLen) =>
    Promise.all([
      hkdfExpandLabel(hash, secret, "key", EMPTY_BYTES, keyLen),
      hkdfExpandLabel(hash, secret, "iv", EMPTY_BYTES, ivLen),
    ]);
class TlsClient {
  constructor(socket, options = {}) {
    if (
      ((this.socket = socket),
      (this.serverName = options.serverName || ""),
      (this.supportTls13 = !1 !== options.tls13),
      (this.supportTls12 = !1 !== options.tls12),
      !this.supportTls13 && !this.supportTls12)
    )
      throw new Error("At least one TLS version must be enabled");
    ((this.alpnProtocols = Array.isArray(options.alpn) ? options.alpn : options.alpn ? [options.alpn] : null),
      (this.allowChacha = options.allowChacha !== false),
      (this.timeout = options.timeout ?? 3e4),
      (this.clientRandom = randomBytes(32)),
      (this.serverRandom = null),
      (this.handshakeChunks = []),
      (this.handshakeComplete = !1),
      (this.negotiatedAlpn = null),
      (this.cipherSuite = null),
      (this.cipherConfig = null),
      (this.isTls13 = !1),
      (this.masterSecret = null),
      (this.handshakeSecret = null),
      (this.clientWriteKey = null),
      (this.serverWriteKey = null),
      (this.clientWriteIv = null),
      (this.serverWriteIv = null),
      (this.clientHandshakeKey = null),
      (this.serverHandshakeKey = null),
      (this.clientHandshakeIv = null),
      (this.serverHandshakeIv = null),
      (this.clientAppKey = null),
      (this.serverAppKey = null),
      (this.clientAppIv = null),
      (this.serverAppIv = null),
      (this.clientWriteCryptoKey = null),
      (this.serverWriteCryptoKey = null),
      (this.clientHandshakeCryptoKey = null),
      (this.serverHandshakeCryptoKey = null),
      (this.clientAppCryptoKey = null),
      (this.serverAppCryptoKey = null),
      (this.clientSeqNum = 0n),
      (this.serverSeqNum = 0n),
      (this.recordParser = new TlsRecordParser()),
      (this.handshakeParser = new TlsHandshakeParser()),
      (this.keyPairs = new Map()),
      (this.ecdhKeyPair = null),
      (this.sawCert = !1));
  }
  recordHandshake(chunk) {
    this.handshakeChunks.push(chunk);
  }
  transcript() {
    return 1 === this.handshakeChunks.length ? this.handshakeChunks[0] : concatBytes(...this.handshakeChunks);
  }
  getCipherConfig(cipherSuite) {
    return CIPHER_SUITES_BY_ID.get(cipherSuite) || null;
  }
  async readChunk(reader) {
    return this.timeout
      ? Promise.race([
          reader.read(),
          new Promise((resolve, reject) => setTimeout(() => reject(new Error("TLS read timeout")), this.timeout)),
        ])
      : reader.read();
  }
  async readRecordsUntil(reader, predicate, closedError) {
    for (;;) {
      let record;
      for (; (record = this.recordParser.next());) if (await predicate(record)) return;
      const { value, done } = await this.readChunk(reader);
      if (done) throw new Error(closedError);
      this.recordParser.feed(value);
    }
  }
  async readHandshakeUntil(reader, predicate, closedError) {
    for (let message; (message = this.handshakeParser.next());) if (await predicate(message)) return;
    return this.readRecordsUntil(
      reader,
      async (record) => {
        if (record.type === CONTENT_TYPE_ALERT) {
          if (shouldIgnoreTlsAlert(record.fragment)) return;
          throw new Error(`TLS Alert: ${record.fragment[1]}`);
        }
        if (record.type === CONTENT_TYPE_HANDSHAKE) {
          this.handshakeParser.feed(record.fragment);
          for (let message; (message = this.handshakeParser.next());) if (await predicate(message)) return 1;
        }
      },
      closedError,
    );
  }
  async acceptCertificate(certificate) {
    if (!certificate?.length) throw new Error("Empty certificate");
    this.sawCert = !0;
  }
  async handshake() {
    const [p256Share, x25519Share] = await Promise.all([generateKeyShare("P-256"), generateKeyShare("X25519")]);
    ((this.keyPairs = new Map([
      [23, p256Share],
      [29, x25519Share],
    ])),
      (this.ecdhKeyPair = p256Share.keyPair));
    const reader = this.socket.readable.getReader(),
      writer = this.socket.writable.getWriter();
    try {
      const clientHello = buildClientHello(
        this.clientRandom,
        this.serverName,
        { x25519: x25519Share.publicKeyRaw, p256: p256Share.publicKeyRaw },
        { tls13: this.supportTls13, tls12: this.supportTls12, alpn: this.alpnProtocols, chacha: this.allowChacha },
      );
      (this.recordHandshake(clientHello),
        await writer.write(buildTlsRecord(CONTENT_TYPE_HANDSHAKE, clientHello, TLS_VERSION_10)));
      const serverHello = await this.receiveServerHello(reader);
      if (serverHello.isHRR) throw new Error("HelloRetryRequest is not supported by TLSClientMini");
      if (serverHello.keyShare?.group && this.keyPairs.has(serverHello.keyShare.group)) {
        const selectedKeyPair = this.keyPairs.get(serverHello.keyShare.group);
        this.ecdhKeyPair = selectedKeyPair.keyPair;
      }
      (serverHello.isTls13
        ? await this.handshakeTls13(reader, writer, serverHello)
        : await this.handshakeTls12(reader, writer),
        (this.handshakeComplete = !0));
    } finally {
      (reader.releaseLock(), writer.releaseLock());
    }
  }
  async receiveServerHello(reader) {
    for (;;) {
      const { value, done } = await this.readChunk(reader);
      if (done) throw new Error("Connection closed waiting for ServerHello");
      let record;
      for (this.recordParser.feed(value); (record = this.recordParser.next());) {
        if (record.type === CONTENT_TYPE_ALERT) {
          if (shouldIgnoreTlsAlert(record.fragment)) continue;
          throw new Error(`TLS Alert: level=${record.fragment[0]}, desc=${record.fragment[1]}`);
        }
        if (record.type !== CONTENT_TYPE_HANDSHAKE) continue;
        let message;
        for (this.handshakeParser.feed(record.fragment); (message = this.handshakeParser.next());) {
          if (message.type !== HANDSHAKE_TYPE_SERVER_HELLO) continue;
          this.recordHandshake(message.raw);
          const serverHello = parseServerHello(message.body);
          if (
            ((this.serverRandom = serverHello.serverRandom),
            (this.cipherSuite = serverHello.cipherSuite),
            (this.cipherConfig = this.getCipherConfig(serverHello.cipherSuite)),
            (this.isTls13 = serverHello.isTls13),
            (this.negotiatedAlpn = serverHello.alpn || null),
            !this.cipherConfig)
          )
            throw new Error(`Unsupported cipher suite: 0x${serverHello.cipherSuite.toString(16)}`);
          return serverHello;
        }
      }
    }
  }
  async handshakeTls12(reader, writer) {
    /**/
    let serverKeyExchange = null;
    let sawServerHelloDone = !1;
    let clientCertRequested = !1;
    if (
      (await this.readHandshakeUntil(
        reader,
        async (message) => {
          switch (message.type) {
            case HANDSHAKE_TYPE_CERTIFICATE: {
              this.recordHandshake(message.raw);
              const certificate = extractLeafCertificate(message.body, 1);
              if (!certificate) throw new Error("Missing TLS 1.2 certificate");
              await this.acceptCertificate(certificate);
              break;
            }
            case HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE:
              (this.recordHandshake(message.raw), (serverKeyExchange = parseServerKeyExchange(message.body)));
              break;
            case HANDSHAKE_TYPE_SERVER_HELLO_DONE:
              return (this.recordHandshake(message.raw), (sawServerHelloDone = !0), 1);
            case HANDSHAKE_TYPE_CERTIFICATE_REQUEST:
              (this.recordHandshake(message.raw), (clientCertRequested = !0));
              break;
            default:
              this.recordHandshake(message.raw);
          }
        },
        "Connection closed during TLS 1.2 handshake",
      ),
      !this.sawCert)
    )
      throw new Error("Missing TLS 1.2 leaf certificate");
    const serverKeyExchangeData = /**/ serverKeyExchange;
    if (!serverKeyExchangeData) throw new Error("Missing TLS 1.2 ServerKeyExchange");
    const curveName = GROUPS_BY_ID.get(serverKeyExchangeData.namedCurve);
    if (!curveName) throw new Error(`Unsupported named curve: 0x${serverKeyExchangeData.namedCurve.toString(16)}`);
    const keyShare = this.keyPairs.get(serverKeyExchangeData.namedCurve);
    if (!keyShare) throw new Error(`Missing key pair for curve: 0x${serverKeyExchangeData.namedCurve.toString(16)}`);
    const preMasterSecret = await deriveSharedSecret(
        keyShare.keyPair.privateKey,
        serverKeyExchangeData.serverPublicKey,
        curveName,
      ),
      clientKeyExchange = buildHandshakeMessage(
        HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE,
        tlsBytes(keyShare.publicKeyRaw.length, keyShare.publicKeyRaw),
      );
    if (clientCertRequested) {
      const emptyCertificate = buildHandshakeMessage(HANDSHAKE_TYPE_CERTIFICATE, tlsBytes(0, 0, 0));
      (this.recordHandshake(emptyCertificate),
        await writer.write(buildTlsRecord(CONTENT_TYPE_HANDSHAKE, emptyCertificate)));
    }
    this.recordHandshake(clientKeyExchange);
    const hashName = this.cipherConfig.hash;
    this.masterSecret = await tls12Prf(
      preMasterSecret,
      "master secret",
      concatBytes(this.clientRandom, this.serverRandom),
      48,
      hashName,
    );
    const keyLen = this.cipherConfig.keyLen,
      ivLen = this.cipherConfig.ivLen,
      keyBlock = await tls12Prf(
        this.masterSecret,
        "key expansion",
        concatBytes(this.serverRandom, this.clientRandom),
        2 * keyLen + 2 * ivLen,
        hashName,
      );
    ((this.clientWriteKey = keyBlock.slice(0, keyLen)),
      (this.serverWriteKey = keyBlock.slice(keyLen, 2 * keyLen)),
      (this.clientWriteIv = keyBlock.slice(2 * keyLen, 2 * keyLen + ivLen)),
      (this.serverWriteIv = keyBlock.slice(2 * keyLen + ivLen, 2 * keyLen + 2 * ivLen)));
    if (!this.cipherConfig.chacha)
      [this.clientWriteCryptoKey, this.serverWriteCryptoKey] = await Promise.all([
        importAesGcmKey(this.clientWriteKey, ["encrypt"]),
        importAesGcmKey(this.serverWriteKey, ["decrypt"]),
      ]);
    (await writer.write(buildTlsRecord(CONTENT_TYPE_HANDSHAKE, clientKeyExchange)),
      await writer.write(buildTlsRecord(CONTENT_TYPE_CHANGE_CIPHER_SPEC, tlsBytes(1))));
    const clientVerifyData = await tls12Prf(
        this.masterSecret,
        "client finished",
        await digestBytes(hashName, this.transcript()),
        12,
        hashName,
      ),
      finishedMessage = buildHandshakeMessage(HANDSHAKE_TYPE_FINISHED, clientVerifyData);
    (this.recordHandshake(finishedMessage),
      await writer.write(
        buildTlsRecord(CONTENT_TYPE_HANDSHAKE, await this.encryptTls12(finishedMessage, CONTENT_TYPE_HANDSHAKE)),
      ));
    let sawChangeCipherSpec = !1;
    await this.readRecordsUntil(
      reader,
      async (record) => {
        if (record.type === CONTENT_TYPE_ALERT) {
          if (shouldIgnoreTlsAlert(record.fragment)) return;
          throw new Error(`TLS Alert: ${record.fragment[1]}`);
        }
        if (record.type === CONTENT_TYPE_CHANGE_CIPHER_SPEC) return void (sawChangeCipherSpec = !0);
        if (record.type !== CONTENT_TYPE_HANDSHAKE || !sawChangeCipherSpec) return;
        const decrypted = await this.decryptTls12(record.fragment, CONTENT_TYPE_HANDSHAKE);
        if (decrypted[0] !== HANDSHAKE_TYPE_FINISHED) return;
        const verifyLength = readUint24(decrypted, 1),
          verifyData = decrypted.slice(4, 4 + verifyLength),
          expectedVerifyData = await tls12Prf(
            this.masterSecret,
            "server finished",
            await digestBytes(hashName, this.transcript()),
            12,
            hashName,
          );
        if (!constantTimeEqual(verifyData, expectedVerifyData))
          throw new Error("TLS 1.2 server Finished verify failed");
        return 1;
      },
      "Connection closed waiting for TLS 1.2 Finished",
    );
  }
  async handshakeTls13(reader, writer, serverHello) {
    const groupName = GROUPS_BY_ID.get(serverHello.keyShare?.group);
    if (!groupName || !serverHello.keyShare?.key?.length) throw new Error("Missing TLS 1.3 key_share");
    const hashName = this.cipherConfig.hash,
      hashLen = hashByteLength(hashName),
      keyLen = this.cipherConfig.keyLen,
      ivLen = this.cipherConfig.ivLen,
      sharedSecret = await deriveSharedSecret(this.ecdhKeyPair.privateKey, serverHello.keyShare.key, groupName),
      earlySecret = await hkdfExtract(hashName, null, new Uint8Array(hashLen)),
      derivedSecret = await hkdfExpandLabel(
        hashName,
        earlySecret,
        "derived",
        await digestBytes(hashName, EMPTY_BYTES),
        hashLen,
      );
    this.handshakeSecret = await hkdfExtract(hashName, derivedSecret, sharedSecret);
    const transcriptHash = await digestBytes(hashName, this.transcript()),
      clientHandshakeTrafficSecret = await hkdfExpandLabel(
        hashName,
        this.handshakeSecret,
        "c hs traffic",
        transcriptHash,
        hashLen,
      ),
      serverHandshakeTrafficSecret = await hkdfExpandLabel(
        hashName,
        this.handshakeSecret,
        "s hs traffic",
        transcriptHash,
        hashLen,
      );
    (([this.clientHandshakeKey, this.clientHandshakeIv] = await deriveTrafficKeys(
      hashName,
      clientHandshakeTrafficSecret,
      keyLen,
      ivLen,
    )),
      ([this.serverHandshakeKey, this.serverHandshakeIv] = await deriveTrafficKeys(
        hashName,
        serverHandshakeTrafficSecret,
        keyLen,
        ivLen,
      )));
    if (!this.cipherConfig.chacha)
      [this.clientHandshakeCryptoKey, this.serverHandshakeCryptoKey] = await Promise.all([
        importAesGcmKey(this.clientHandshakeKey, ["encrypt"]),
        importAesGcmKey(this.serverHandshakeKey, ["decrypt"]),
      ]);
    const serverFinishedKey = await hkdfExpandLabel(
      hashName,
      serverHandshakeTrafficSecret,
      "finished",
      EMPTY_BYTES,
      hashLen,
    );
    let serverFinishedReceived = !1;
    let clientCertRequested = !1;
    const handleHandshakeMessage = async (message) => {
      switch (message.type) {
        case HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS: {
          const encryptedExtensions = parseEncryptedExtensions(message.body);
          (encryptedExtensions.alpn && (this.negotiatedAlpn = encryptedExtensions.alpn),
            this.recordHandshake(message.raw));
          break;
        }
        case HANDSHAKE_TYPE_CERTIFICATE: {
          const certificate = extractLeafCertificate(message.body);
          if (!certificate) throw new Error("Missing TLS 1.3 certificate");
          (await this.acceptCertificate(certificate), this.recordHandshake(message.raw));
          break;
        }
        case HANDSHAKE_TYPE_CERTIFICATE_REQUEST:
          (this.recordHandshake(message.raw), (clientCertRequested = !0));
          break;
        case HANDSHAKE_TYPE_CERTIFICATE_VERIFY:
          this.recordHandshake(message.raw);
          break;
        case HANDSHAKE_TYPE_FINISHED: {
          const expectedVerifyData = await hmac(
            hashName,
            serverFinishedKey,
            await digestBytes(hashName, this.transcript()),
          );
          if (!constantTimeEqual(expectedVerifyData, message.body))
            throw new Error("TLS 1.3 server Finished verify failed");
          (this.recordHandshake(message.raw), (serverFinishedReceived = !0));
          break;
        }
        default:
          this.recordHandshake(message.raw);
      }
    };
    await this.readRecordsUntil(
      reader,
      async (record) => {
        if (record.type === CONTENT_TYPE_CHANGE_CIPHER_SPEC || record.type === CONTENT_TYPE_HANDSHAKE) return;
        if (record.type === CONTENT_TYPE_ALERT) {
          if (shouldIgnoreTlsAlert(record.fragment)) return;
          throw new Error(`TLS Alert: ${record.fragment[1]}`);
        }
        if (record.type !== CONTENT_TYPE_APPLICATION_DATA) return;
        const decrypted = await this.decryptTls13Handshake(record.fragment),
          innerType = decrypted[decrypted.length - 1],
          plaintext = decrypted.slice(0, -1);
        if (innerType === CONTENT_TYPE_HANDSHAKE) {
          this.handshakeParser.feed(plaintext);
          for (let message; (message = this.handshakeParser.next());)
            if ((await handleHandshakeMessage(message), serverFinishedReceived)) return 1;
        }
      },
      "Connection closed during TLS 1.3 handshake",
    );
    const applicationTranscriptHash = await digestBytes(hashName, this.transcript()),
      masterDerivedSecret = await hkdfExpandLabel(
        hashName,
        this.handshakeSecret,
        "derived",
        await digestBytes(hashName, EMPTY_BYTES),
        hashLen,
      ),
      masterSecret = await hkdfExtract(hashName, masterDerivedSecret, new Uint8Array(hashLen)),
      clientAppTrafficSecret = await hkdfExpandLabel(
        hashName,
        masterSecret,
        "c ap traffic",
        applicationTranscriptHash,
        hashLen,
      ),
      serverAppTrafficSecret = await hkdfExpandLabel(
        hashName,
        masterSecret,
        "s ap traffic",
        applicationTranscriptHash,
        hashLen,
      );
    (([this.clientAppKey, this.clientAppIv] = await deriveTrafficKeys(hashName, clientAppTrafficSecret, keyLen, ivLen)),
      ([this.serverAppKey, this.serverAppIv] = await deriveTrafficKeys(
        hashName,
        serverAppTrafficSecret,
        keyLen,
        ivLen,
      )));
    if (!this.cipherConfig.chacha)
      [this.clientAppCryptoKey, this.serverAppCryptoKey] = await Promise.all([
        importAesGcmKey(this.clientAppKey, ["encrypt"]),
        importAesGcmKey(this.serverAppKey, ["decrypt"]),
      ]);
    let clientFlightHandshake = EMPTY_BYTES;
    if (clientCertRequested)
      ((clientFlightHandshake = buildHandshakeMessage(HANDSHAKE_TYPE_CERTIFICATE, tlsBytes(0, 0, 0, 0))),
        this.recordHandshake(clientFlightHandshake));
    const clientFinishedKey = await hkdfExpandLabel(
        hashName,
        clientHandshakeTrafficSecret,
        "finished",
        EMPTY_BYTES,
        hashLen,
      ),
      clientFinishedVerifyData = await hmac(
        hashName,
        clientFinishedKey,
        await digestBytes(hashName, this.transcript()),
      ),
      clientFinishedMessage = buildHandshakeMessage(HANDSHAKE_TYPE_FINISHED, clientFinishedVerifyData);
    (this.recordHandshake(clientFinishedMessage),
      await writer.write(
        buildTlsRecord(
          CONTENT_TYPE_APPLICATION_DATA,
          await this.encryptTls13Handshake(
            concatBytes(clientFlightHandshake, clientFinishedMessage, [CONTENT_TYPE_HANDSHAKE]),
          ),
        ),
      ),
      (this.clientSeqNum = 0n),
      (this.serverSeqNum = 0n));
  }
  async encryptTls12(plaintext, contentType) {
    const sequenceNumber = this.clientSeqNum++,
      sequenceBytes = uint64be(sequenceNumber),
      additionalData = concatBytes(sequenceBytes, [contentType], uint16be(TLS_VERSION_12), uint16be(plaintext.length));
    if (this.cipherConfig.chacha) {
      const nonce = xorSequenceIntoIv(this.clientWriteIv, sequenceNumber);
      return chacha20Poly1305Encrypt(this.clientWriteKey, nonce, plaintext, additionalData);
    }
    const explicitNonce = randomBytes(8);
    if (!this.clientWriteCryptoKey) this.clientWriteCryptoKey = await importAesGcmKey(this.clientWriteKey, ["encrypt"]);
    return concatBytes(
      explicitNonce,
      await aesGcmEncryptWithKey(
        this.clientWriteCryptoKey,
        concatBytes(this.clientWriteIv, explicitNonce),
        plaintext,
        additionalData,
      ),
    );
  }
  async decryptTls12(ciphertext, contentType) {
    const sequenceNumber = this.serverSeqNum++,
      sequenceBytes = uint64be(sequenceNumber);
    if (this.cipherConfig.chacha) {
      const nonce = xorSequenceIntoIv(this.serverWriteIv, sequenceNumber);
      return chacha20Poly1305Decrypt(
        this.serverWriteKey,
        nonce,
        ciphertext,
        concatBytes(sequenceBytes, [contentType], uint16be(TLS_VERSION_12), uint16be(ciphertext.length - 16)),
      );
    }
    const explicitNonce = ciphertext.subarray(0, 8),
      encryptedData = ciphertext.subarray(8);
    if (!this.serverWriteCryptoKey) this.serverWriteCryptoKey = await importAesGcmKey(this.serverWriteKey, ["decrypt"]);
    return aesGcmDecryptWithKey(
      this.serverWriteCryptoKey,
      concatBytes(this.serverWriteIv, explicitNonce),
      encryptedData,
      concatBytes(sequenceBytes, [contentType], uint16be(TLS_VERSION_12), uint16be(encryptedData.length - 16)),
    );
  }
  async encryptTls13Handshake(plaintext) {
    const nonce = xorSequenceIntoIv(this.clientHandshakeIv, this.clientSeqNum++),
      additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(plaintext.length + 16));
    if (this.cipherConfig.chacha)
      return chacha20Poly1305Encrypt(this.clientHandshakeKey, nonce, plaintext, additionalData);
    if (!this.clientHandshakeCryptoKey)
      this.clientHandshakeCryptoKey = await importAesGcmKey(this.clientHandshakeKey, ["encrypt"]);
    return aesGcmEncryptWithKey(this.clientHandshakeCryptoKey, nonce, plaintext, additionalData);
  }
  async decryptTls13Handshake(ciphertext) {
    const nonce = xorSequenceIntoIv(this.serverHandshakeIv, this.serverSeqNum++),
      additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(ciphertext.length));
    const decrypted = this.cipherConfig.chacha
      ? await chacha20Poly1305Decrypt(this.serverHandshakeKey, nonce, ciphertext, additionalData)
      : await aesGcmDecryptWithKey(
          this.serverHandshakeCryptoKey ||
            (this.serverHandshakeCryptoKey = await importAesGcmKey(this.serverHandshakeKey, ["decrypt"])),
          nonce,
          ciphertext,
          additionalData,
        );
    let innerTypeIndex = decrypted.length - 1;
    for (; innerTypeIndex >= 0 && !decrypted[innerTypeIndex];) innerTypeIndex--;
    return innerTypeIndex < 0 ? EMPTY_BYTES : decrypted.slice(0, innerTypeIndex + 1);
  }
  async encryptTls13(data) {
    const plaintext = concatBytes(data, [CONTENT_TYPE_APPLICATION_DATA]),
      nonce = xorSequenceIntoIv(this.clientAppIv, this.clientSeqNum++),
      additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(plaintext.length + 16));
    if (this.cipherConfig.chacha) return chacha20Poly1305Encrypt(this.clientAppKey, nonce, plaintext, additionalData);
    if (!this.clientAppCryptoKey) this.clientAppCryptoKey = await importAesGcmKey(this.clientAppKey, ["encrypt"]);
    return aesGcmEncryptWithKey(this.clientAppCryptoKey, nonce, plaintext, additionalData);
  }
  async decryptTls13(ciphertext) {
    const nonce = xorSequenceIntoIv(this.serverAppIv, this.serverSeqNum++),
      additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(ciphertext.length)),
      plaintext = this.cipherConfig.chacha
        ? await chacha20Poly1305Decrypt(this.serverAppKey, nonce, ciphertext, additionalData)
        : await aesGcmDecryptWithKey(
            this.serverAppCryptoKey ||
              (this.serverAppCryptoKey = await importAesGcmKey(this.serverAppKey, ["decrypt"])),
            nonce,
            ciphertext,
            additionalData,
          );
    let innerTypeIndex = plaintext.length - 1;
    for (; innerTypeIndex >= 0 && !plaintext[innerTypeIndex];) innerTypeIndex--;
    if (innerTypeIndex < 0)
      return {
        data: EMPTY_BYTES,
        type: 0,
      };
    return {
      data: plaintext.slice(0, innerTypeIndex),
      type: plaintext[innerTypeIndex],
    };
  }
  async write(data) {
    if (!this.handshakeComplete) throw new Error("Handshake not complete");
    const plaintext = داده_تبدیل_آرایه_بایتی(data);
    if (!plaintext.byteLength) return;
    const writer = this.socket.writable.getWriter();
    try {
      const records = [];
      for (let offset = 0; offset < plaintext.byteLength; offset += TLS_MAX_PLAINTEXT_FRAGMENT) {
        const chunk = plaintext.subarray(offset, Math.min(offset + TLS_MAX_PLAINTEXT_FRAGMENT, plaintext.byteLength));
        const encrypted = this.isTls13
          ? await this.encryptTls13(chunk)
          : await this.encryptTls12(chunk, CONTENT_TYPE_APPLICATION_DATA);
        records.push(buildTlsRecord(CONTENT_TYPE_APPLICATION_DATA, encrypted));
      }
      await writer.write(records.length === 1 ? records[0] : concatBytes(...records));
    } finally {
      writer.releaseLock();
    }
  }
  async read() {
    for (;;) {
      let record;
      for (; (record = this.recordParser.next());) {
        if (record.type === CONTENT_TYPE_ALERT) {
          if (record.fragment[1] === ALERT_CLOSE_NOTIFY) return null;
          throw new Error(`TLS Alert: ${record.fragment[1]}`);
        }
        if (record.type !== CONTENT_TYPE_APPLICATION_DATA) continue;
        if (!this.isTls13) return this.decryptTls12(record.fragment, CONTENT_TYPE_APPLICATION_DATA);
        const { data, type } = await this.decryptTls13(record.fragment);
        if (type === CONTENT_TYPE_APPLICATION_DATA) return data;
        if (type === CONTENT_TYPE_ALERT) {
          if (data[1] === ALERT_CLOSE_NOTIFY) return null;
          throw new Error(`TLS Alert: ${data[1]}`);
        }
        if (type !== CONTENT_TYPE_HANDSHAKE) continue;
        let message;
        for (this.handshakeParser.feed(data); (message = this.handshakeParser.next());)
          if (message.type !== HANDSHAKE_TYPE_NEW_SESSION_TICKET && message.type === HANDSHAKE_TYPE_KEY_UPDATE)
            throw new Error("TLS 1.3 KeyUpdate is not supported by TLSClientMini");
      }
      const reader = this.socket.readable.getReader();
      try {
        const { value, done } = await this.readChunk(reader);
        if (done) return null;
        this.recordParser.feed(value);
      } finally {
        reader.releaseLock();
      }
    }
  }
  close() {
    this.socket.close();
  }
}

function stripIPv6Brackets(hostname = "") {
  const host = String(hostname || "").trim();
  return host.startsWith("[") && host.endsWith("]") ? host.slice(1, -1) : host;
}

function isIPHostname(hostname = "") {
  const host = stripIPv6Brackets(hostname);
  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
  if (ipv4Regex.test(host)) return true;
  if (!host.includes(":")) return false;
  try {
    new URL(`http://[${host}]/`);
    return true;
  } catch (e) {
    return false;
  }
}

// ===== اتصال گردش =====
const CONNECT_TIMEOUT_MS = 9999;
const کوکی_جادویی_استان_گردش = new Uint8Array([0x21, 0x12, 0xa4, 0x42]);
const نوع_استان_گردش = {
  ALLOCATE_REQUEST: 0x0003,
  ALLOCATE_SUCCESS: 0x0103,
  ALLOCATE_ERROR: 0x0113,
  CREATE_PERMISSION_REQUEST: 0x0008,
  CREATE_PERMISSION_SUCCESS: 0x0108,
  CONNECT_REQUEST: 0x000a,
  CONNECT_SUCCESS: 0x010a,
  CONNECTION_BIND_REQUEST: 0x000b,
  CONNECTION_BIND_SUCCESS: 0x010b,
};
const ویژگی_استان_گردش = {
  USERNAME: 0x0006,
  MESSAGE_INTEGRITY: 0x0008,
  ERROR_CODE: 0x0009,
  XOR_PEER_ADDRESS: 0x0012,
  REALM: 0x0014,
  NONCE: 0x0015,
  REQUESTED_TRANSPORT: 0x0019,
  CONNECTION_ID: 0x002a,
};

async function withTimeout(promise, timeoutMs, message) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(message)), timeoutMs);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}

function isIPv4(value) {
  const parts = String(value || "").split(".");
  return (
    parts.length === 4 && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) >= 0 && Number(part) <= 255)
  );
}

function پرشدگی_استان_گردش(length) {
  return -length & 3;
}

function ساخت_ویژگی_استان_گردش(type, value) {
  const body = داده_تبدیل_آرایه_بایتی(value);
  const attribute = new Uint8Array(4 + body.byteLength + پرشدگی_استان_گردش(body.byteLength));
  const view = new DataView(attribute.buffer);
  view.setUint16(0, type);
  view.setUint16(2, body.byteLength);
  attribute.set(body, 4);
  return attribute;
}

function ساخت_پیام_استان_گردش(type, transactionId, attributes) {
  const body = پیوند_بایت_داده(...attributes);
  const header = new Uint8Array(20);
  const view = new DataView(header.buffer);
  view.setUint16(0, type);
  view.setUint16(2, body.byteLength);
  header.set(کوکی_جادویی_استان_گردش, 4);
  header.set(transactionId, 8);
  return پیوند_بایت_داده(header, body);
}

function تحلیل_کد_خطای_گردش(data) {
  return data?.byteLength >= 4 ? (data[2] & 7) * 100 + data[3] : 0;
}

function شناسه_تصادفی_تراکنش_گردش() {
  return crypto.getRandomValues(new Uint8Array(12));
}

async function افزودن_یکپارچگی_پیام_گردش(message, key) {
  const signedMessage = new Uint8Array(message);
  const view = new DataView(signedMessage.buffer);
  view.setUint16(2, view.getUint16(2) + 24);
  const hmacKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", hmacKey, signedMessage);
  return پیوند_بایت_داده(
    signedMessage,
    ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.MESSAGE_INTEGRITY, new Uint8Array(signature)),
  );
}

async function خواندن_پیام_استان_گردش(
  reader,
  bufferedData = null,
  timeoutMessage = گشا("VFVSTiByZXNwb25zZSB0aW1lZCBvdXQ="),
) {
  let buffer = معتبر_داده_طول(bufferedData) ? داده_تبدیل_آرایه_بایتی(bufferedData) : new Uint8Array(0);
  const pull = async () => {
    const { done, value } = await withTimeout(reader.read(), CONNECT_TIMEOUT_MS, timeoutMessage);
    if (done) throw new Error(گشا("VFVSTiBzZXJ2ZXIgY2xvc2VkIGNvbm5lY3Rpb24="));
    if (value?.byteLength) buffer = پیوند_بایت_داده(buffer, value);
  };
  while (buffer.byteLength < 20) await pull();

  const messageLength = 20 + ((buffer[2] << 8) | buffer[3]);
  if (messageLength > 65555) throw new Error(گشا("VFVSTiByZXNwb25zZSBpcyB0b28gbGFyZ2U="));
  while (buffer.byteLength < messageLength) await pull();
  const messageBuffer = buffer.subarray(0, messageLength);
  if (کوکی_جادویی_استان_گردش.some((value, index) => messageBuffer[4 + index] !== value))
    throw new Error(گشا("SW52YWxpZCBUVVJOL1NUVU4gcmVzcG9uc2U="));

  const view = new DataView(messageBuffer.buffer, messageBuffer.byteOffset, messageBuffer.byteLength);
  const attributes = {};
  for (let offset = 20; offset + 4 <= messageLength;) {
    const type = view.getUint16(offset);
    const length = view.getUint16(offset + 2);
    if (offset + 4 + length > messageBuffer.byteLength) break;
    attributes[type] = messageBuffer.slice(offset + 4, offset + 4 + length);
    offset += 4 + length + پرشدگی_استان_گردش(length);
  }
  return {
    message: { type: view.getUint16(0), attributes },
    extraData: buffer.byteLength > messageLength ? buffer.subarray(messageLength) : null,
  };
}

async function نوشتن_بایت_های_گردش(writer, bytes, timeoutMessage) {
  await withTimeout(writer.write(bytes), CONNECT_TIMEOUT_MS, timeoutMessage);
}

async function اتصال_گردش(میانجی, targetHost, targetPort, تی_سی_پی_اتصال) {
  میانجی = { ...میانجی, username: میانجی.username ?? null, password: میانجی.password ?? null };
  const resolvedTargetHost = stripIPv6Brackets(targetHost);
  /**/
  let targetIp = isIPv4(resolvedTargetHost) ? resolvedTargetHost : null;
  if (!targetIp) {
    const records = await دی_ان_اس_امن_پرس_وجو(resolvedTargetHost, "A");
    const recordData = records.find((item) => item.type === 1 && isIPv4(item.data))?.data;
    targetIp = typeof recordData === "string" ? recordData : null;
  }
  if (!targetIp)
    throw new Error(`Could not resolve ${targetHost}${گشا("IHRvIGFuIElQdjQgYWRkcmVzcyBmb3IgVFVSTiBDT05ORUNU")}`);

  const میزبان_گردش = stripIPv6Brackets(میانجی.hostname);
  let controlSocket = null,
    dataSocket = null,
    controlWriter = null,
    controlReader = null,
    dataWriter = null,
    dataReader = null,
    dataReaderReleased = false;
  const close = () => {
    try {
      controlSocket?.close?.();
    } catch (e) {}
    try {
      dataSocket?.close?.();
    } catch (e) {}
  };
  const releaseDataReader = () => {
    if (dataReaderReleased) return;
    dataReaderReleased = true;
    try {
      dataReader?.releaseLock?.();
    } catch (e) {}
  };

  try {
    controlSocket = تی_سی_پی_اتصال({ hostname: میزبان_گردش, port: میانجی.port });
    await withTimeout(controlSocket.opened, CONNECT_TIMEOUT_MS, گشا("VFVSTiBzZXJ2ZXIgY29ubmVjdGlvbiB0aW1lZCBvdXQ="));
    controlWriter = controlSocket.writable.getWriter();
    controlReader = controlSocket.readable.getReader();

    const xorPeerAddress = new Uint8Array(8);
    xorPeerAddress[1] = 1;
    new DataView(xorPeerAddress.buffer).setUint16(2, targetPort ^ 0x2112);
    targetIp.split(".").forEach((value, index) => {
      xorPeerAddress[4 + index] = Number(value) ^ کوکی_جادویی_استان_گردش[index];
    });
    const peerAddress = ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.XOR_PEER_ADDRESS, xorPeerAddress);
    const requestedTransport = new Uint8Array([6, 0, 0, 0]);

    await نوشتن_بایت_های_گردش(
      controlWriter,
      ساخت_پیام_استان_گردش(نوع_استان_گردش.ALLOCATE_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
        ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.REQUESTED_TRANSPORT, requestedTransport),
      ]),
      گشا("VFVSTiBBbGxvY2F0ZSByZXF1ZXN0IHRpbWVkIG91dA=="),
    );

    let پاسخ_گردش = await خواندن_پیام_استان_گردش(
      controlReader,
      null,
      گشا("VFVSTiBBbGxvY2F0ZSByZXNwb25zZSB0aW1lZCBvdXQ="),
    );
    let message = پاسخ_گردش.message;
    let bufferedData = پاسخ_گردش.extraData;
    let integrityKey = null;
    let authAttributes = [];
    const sign = (messageToSign) =>
      integrityKey ? افزودن_یکپارچگی_پیام_گردش(messageToSign, integrityKey) : Promise.resolve(messageToSign);

    if (
      message.type === نوع_استان_گردش.ALLOCATE_ERROR &&
      میانجی.username !== null &&
      میانجی.password !== null &&
      تحلیل_کد_خطای_گردش(message.attributes[ویژگی_استان_گردش.ERROR_CODE]) === 401
    ) {
      const realmBytes = message.attributes[ویژگی_استان_گردش.REALM];
      const nonce = message.attributes[ویژگی_استان_گردش.NONCE];
      if (!realmBytes || !nonce?.byteLength)
        throw new Error(گشا("VFVSTiBhdXRoZW50aWNhdGlvbiBjaGFsbGVuZ2UgaXMgbWlzc2luZyByZWFsbSBvciBub25jZQ=="));

      const realm = textDecoder.decode(realmBytes);
      integrityKey = new Uint8Array(
        await crypto.subtle.digest("MD5", textEncoder.encode(`${میانجی.username}:${realm}:${میانجی.password}`)),
      );
      authAttributes = [
        ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.USERNAME, textEncoder.encode(میانجی.username)),
        ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.REALM, textEncoder.encode(realm)),
        ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.NONCE, nonce),
      ];

      const allocateRequest = await افزودن_یکپارچگی_پیام_گردش(
        ساخت_پیام_استان_گردش(نوع_استان_گردش.ALLOCATE_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
          ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.REQUESTED_TRANSPORT, requestedTransport),
          ...authAttributes,
        ]),
        integrityKey,
      );
      const pipelinedMessages = await Promise.all([
        sign(
          ساخت_پیام_استان_گردش(نوع_استان_گردش.CREATE_PERMISSION_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
            peerAddress,
            ...authAttributes,
          ]),
        ),
        sign(
          ساخت_پیام_استان_گردش(نوع_استان_گردش.CONNECT_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
            peerAddress,
            ...authAttributes,
          ]),
        ),
      ]);
      await نوشتن_بایت_های_گردش(
        controlWriter,
        پیوند_بایت_داده(allocateRequest, ...pipelinedMessages),
        گشا("VFVSTiBhdXRoZW50aWNhdGVkIEFsbG9jYXRlIHJlcXVlc3QgdGltZWQgb3V0"),
      );
      پاسخ_گردش = await خواندن_پیام_استان_گردش(
        controlReader,
        bufferedData,
        گشا("VFVSTiBhdXRoZW50aWNhdGVkIEFsbG9jYXRlIHJlc3BvbnNlIHRpbWVkIG91dA=="),
      );
      message = پاسخ_گردش.message;
      bufferedData = پاسخ_گردش.extraData;
    } else if (message.type === نوع_استان_گردش.ALLOCATE_SUCCESS) {
      const pipelinedMessages = await Promise.all([
        sign(
          ساخت_پیام_استان_گردش(نوع_استان_گردش.CREATE_PERMISSION_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
            peerAddress,
            ...authAttributes,
          ]),
        ),
        sign(
          ساخت_پیام_استان_گردش(نوع_استان_گردش.CONNECT_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
            peerAddress,
            ...authAttributes,
          ]),
        ),
      ]);
      if (pipelinedMessages.length)
        await نوشتن_بایت_های_گردش(
          controlWriter,
          پیوند_بایت_داده(...pipelinedMessages),
          گشا("VFVSTiBwaXBlbGluZWQgcmVxdWVzdCB0aW1lZCBvdXQ="),
        );
    }

    if (message.type !== نوع_استان_گردش.ALLOCATE_SUCCESS) {
      const errorCode = تحلیل_کد_خطای_گردش(message.attributes[ویژگی_استان_گردش.ERROR_CODE]);
      throw new Error(
        errorCode ? `${گشا("VFVSTiBBbGxvY2F0ZSBmYWlsZWQgd2l0aCA=")}${errorCode}` : گشا("VFVSTiBBbGxvY2F0ZSBmYWlsZWQ="),
      );
    }

    dataSocket = تی_سی_پی_اتصال({ hostname: میزبان_گردش, port: میانجی.port });
    پاسخ_گردش = await خواندن_پیام_استان_گردش(
      controlReader,
      bufferedData,
      گشا("VFVSTiBDcmVhdGVQZXJtaXNzaW9uIHJlc3BvbnNlIHRpbWVkIG91dA=="),
    );
    message = پاسخ_گردش.message;
    bufferedData = پاسخ_گردش.extraData;
    if (message.type !== نوع_استان_گردش.CREATE_PERMISSION_SUCCESS)
      throw new Error(گشا("VFVSTiBDcmVhdGVQZXJtaXNzaW9uIGZhaWxlZA=="));

    پاسخ_گردش = await خواندن_پیام_استان_گردش(
      controlReader,
      bufferedData,
      گشا("VFVSTiBDT05ORUNUIHJlc3BvbnNlIHRpbWVkIG91dA=="),
    );
    message = پاسخ_گردش.message;
    bufferedData = پاسخ_گردش.extraData;
    if (message.type !== نوع_استان_گردش.CONNECT_SUCCESS || !message.attributes[ویژگی_استان_گردش.CONNECTION_ID])
      throw new Error(گشا("VFVSTiBDT05ORUNUIGZhaWxlZA=="));

    await withTimeout(dataSocket.opened, CONNECT_TIMEOUT_MS, گشا("VFVSTiBkYXRhIGNvbm5lY3Rpb24gdGltZWQgb3V0"));
    dataWriter = dataSocket.writable.getWriter();
    dataReader = dataSocket.readable.getReader();
    await نوشتن_بایت_های_گردش(
      dataWriter,
      await sign(
        ساخت_پیام_استان_گردش(نوع_استان_گردش.CONNECTION_BIND_REQUEST, شناسه_تصادفی_تراکنش_گردش(), [
          ساخت_ویژگی_استان_گردش(ویژگی_استان_گردش.CONNECTION_ID, message.attributes[ویژگی_استان_گردش.CONNECTION_ID]),
          ...authAttributes,
        ]),
      ),
      گشا("VFVSTiBDb25uZWN0aW9uQmluZCByZXF1ZXN0IHRpbWVkIG91dA=="),
    );

    پاسخ_گردش = await خواندن_پیام_استان_گردش(
      dataReader,
      null,
      گشا("VFVSTiBDb25uZWN0aW9uQmluZCByZXNwb25zZSB0aW1lZCBvdXQ="),
    );
    message = پاسخ_گردش.message;
    const extraPayload = پاسخ_گردش.extraData;
    if (message.type !== نوع_استان_گردش.CONNECTION_BIND_SUCCESS)
      throw new Error(گشا("VFVSTiBDb25uZWN0aW9uQmluZCBmYWlsZWQ="));

    controlWriter.releaseLock();
    controlWriter = null;
    controlReader.releaseLock();
    controlReader = null;
    dataWriter.releaseLock();
    dataWriter = null;

    const readable = new ReadableStream({
      start(controller) {
        if (extraPayload?.byteLength) controller.enqueue(extraPayload);
      },
      pull(controller) {
        return dataReader.read().then(({ done, value }) => {
          if (done) {
            releaseDataReader();
            controller.close();
          } else if (value?.byteLength) controller.enqueue(new Uint8Array(value));
        });
      },
      cancel() {
        try {
          dataReader?.cancel?.();
        } catch (e) {}
        releaseDataReader();
        close();
      },
    });

    return { readable, writable: dataSocket.writable, closed: dataSocket.closed, close };
  } catch (error) {
    try {
      controlWriter?.releaseLock?.();
    } catch (e) {}
    try {
      controlReader?.releaseLock?.();
    } catch (e) {}
    try {
      dataWriter?.releaseLock?.();
    } catch (e) {}
    releaseDataReader();
    close();
    throw error;
  }
}
// ===== اتصال مجرای امن =====
const حداکثر_اندازه_بخش_مجرای_امن = 1400;
const بایت_های_خالی_مجرای_امن = new Uint8Array(0);

function خواندن_شانزده_بیتی_مجرای_امن(bytes, offset = 0) {
  return (bytes[offset] << 8) | bytes[offset + 1];
}

function خواندن_سی_ودو_بیتی_مجرای_امن(bytes, offset = 0) {
  return ((bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0;
}

function تصادفی_شانزده_بیتی_مجرای_امن() {
  return خواندن_شانزده_بیتی_مجرای_امن(crypto.getRandomValues(new Uint8Array(2)));
}

function internetChecksum(bytes, offset, length) {
  let sum = 0;
  for (let index = offset; index < offset + length - 1; index += 2) sum += خواندن_شانزده_بیتی_مجرای_امن(bytes, index);
  if (length & 1) sum += bytes[offset + length - 1] << 8;
  while (sum >> 16) sum = (sum & 0xffff) + (sum >> 16);
  return ~sum & 0xffff;
}

async function اتصال_مجرای_امن(میانجی, targetHost, targetPort, تی_سی_پی_اتصال) {
  میانجی = { ...میانجی, username: میانجی.username ?? null, password: میانجی.password ?? null };
  let bufferedBytes = بایت_های_خالی_مجرای_امن,
    pppIdentifier = 1,
    socket = null,
    reader = null,
    writer = null;
  let closedSettled = false,
    resolveClosed,
    rejectClosed;
  const closed = new Promise((resolve, reject) => {
    resolveClosed = resolve;
    rejectClosed = reject;
  });
  const settleClosed = (settle, value) => {
    if (closedSettled) return;
    closedSettled = true;
    settle(value);
  };
  const close = () => {
    try {
      reader?.cancel?.().catch?.(() => {});
    } catch (e) {}
    try {
      reader?.releaseLock?.();
    } catch (e) {}
    try {
      writer?.close?.().catch?.(() => {});
    } catch (e) {}
    try {
      writer?.releaseLock?.();
    } catch (e) {}
    try {
      socket?.close?.();
    } catch (e) {}
    settleClosed(resolveClosed);
  };

  const readSocketChunk = async () => {
    const { value, done } = await reader.read();
    if (done || !value) throw new Error(گشا("U1NUUCBzb2NrZXQgY2xvc2Vk"));
    return داده_تبدیل_آرایه_بایتی(value);
  };
  const readBytes = async (length) => {
    while (bufferedBytes.byteLength < length) {
      const chunk = await readSocketChunk();
      bufferedBytes = bufferedBytes.byteLength ? پیوند_بایت_داده(bufferedBytes, chunk) : chunk;
    }
    const result = bufferedBytes.subarray(0, length);
    bufferedBytes = bufferedBytes.subarray(length);
    return result;
  };
  const readHttpLine = async () => {
    for (;;) {
      const lineEnd = bufferedBytes.indexOf(10);
      if (lineEnd >= 0) {
        const line = textDecoder.decode(bufferedBytes.subarray(0, lineEnd));
        bufferedBytes = bufferedBytes.subarray(lineEnd + 1);
        return line.replace(/\r$/, "");
      }
      const chunk = await readSocketChunk();
      bufferedBytes = bufferedBytes.byteLength ? پیوند_بایت_داده(bufferedBytes, chunk) : chunk;
    }
  };
  const readPacket = async (timeoutMs = CONNECT_TIMEOUT_MS) => {
    const header = await withTimeout(readBytes(4), timeoutMs, گشا("U1NUUCByZWFkIHRpbWVvdXQ="));
    const length = خواندن_شانزده_بیتی_مجرای_امن(header, 2) & 0x0fff;
    if (length < 4) throw new Error(گشا("SW52YWxpZCBTU1RQIHBhY2tldCBsZW5ndGg="));
    return {
      isControl: (header[1] & 1) !== 0,
      body:
        length > 4
          ? await withTimeout(readBytes(length - 4), timeoutMs, گشا("U1NUUCBwYWNrZXQgYm9keSByZWFkIHRpbWVvdXQ="))
          : بایت_های_خالی_مجرای_امن,
    };
  };
  const ساخت_بسته_داده_مجرای_امن = (pppFrame) => {
    const packetLength = 6 + pppFrame.byteLength;
    const packet = new Uint8Array(packetLength);
    packet.set([0x10, 0x00, ((packetLength >> 8) & 0x0f) | 0x80, packetLength & 0xff, 0xff, 0x03]);
    packet.set(pppFrame, 6);
    return packet;
  };
  const buildPppConfigurePacket = (protocol, code, id, options = []) => {
    const optionsLength = options.reduce((size, option) => size + 2 + option.data.byteLength, 0);
    const frame = new Uint8Array(6 + optionsLength);
    const view = new DataView(frame.buffer);
    view.setUint16(0, protocol);
    frame[2] = code;
    frame[3] = id;
    view.setUint16(4, 4 + optionsLength);
    options.reduce((offset, option) => {
      frame[offset] = option.type;
      frame[offset + 1] = 2 + option.data.byteLength;
      frame.set(option.data, offset + 2);
      return offset + 2 + option.data.byteLength;
    }, 6);
    return frame;
  };
  const parsePPPFrame = (data) => {
    const offset = data.byteLength >= 2 && data[0] === 0xff && data[1] === 0x03 ? 2 : 0;
    if (data.byteLength - offset < 4) return null;
    const protocol = خواندن_شانزده_بیتی_مجرای_امن(data, offset);
    if (protocol === 0x0021) return { protocol, ipPacket: data.subarray(offset + 2) };
    if (data.byteLength - offset < 6) return null;
    return {
      protocol,
      code: data[offset + 2],
      id: data[offset + 3],
      payload: data.subarray(offset + 6),
      rawPacket: data.subarray(offset),
    };
  };
  const parsePppOptions = (data) => {
    const options = [];
    for (let offset = 0; offset + 2 <= data.byteLength;) {
      const type = data[offset];
      const length = data[offset + 1];
      if (length < 2 || offset + length > data.byteLength) break;
      options.push({ type, data: data.subarray(offset + 2, offset + length) });
      offset += length;
    }
    return options;
  };

  try {
    const serverHost = stripIPv6Brackets(میانجی.hostname);
    const serverPort = میانجی.port;
    socket = تی_سی_پی_اتصال(
      { hostname: serverHost, port: serverPort },
      { secureTransport: "on", allowHalfOpen: false },
    );
    await withTimeout(socket.opened, CONNECT_TIMEOUT_MS, گشا("U1NUUCBzZXJ2ZXIgY29ubmVjdGlvbiB0aW1lZCBvdXQ="));
    reader = socket.readable.getReader();
    writer = socket.writable.getWriter();

    const displayHost = serverHost.includes(":") ? `[${serverHost}]` : serverHost;
    const httpRequest = textEncoder.encode(
      `${گشا("U1NUUF9EVVBMRVhfUE9TVCAvc3JhX3tCQTE5NTk4MC1DRDQ5LTQ1OGItOUUyMy1DODRFRTBBRENENzV9LyBIVFRQLzEuMQ0K")}` +
        `Host: ${Number(serverPort) === 443 ? displayHost : `${displayHost}:${serverPort}`}\r\n` +
        "Content-Length: 18446744073709551615\r\n" +
        `${گشا("U1NUUENPUlJFTEFUSU9OSUQ6IHs=")}${crypto.randomUUID()}}\r\n\r\n`,
    );
    const encapsulatedProtocol = new Uint8Array(2);
    new DataView(encapsulatedProtocol.buffer).setUint16(0, 1);
    const maximumReceiveUnit = new Uint8Array(2);
    new DataView(maximumReceiveUnit.buffer).setUint16(0, 1500);
    const درخواست_اتصال_مجرای_امن = new Uint8Array(12 + encapsulatedProtocol.byteLength);
    const نمای_اتصال_مجرای_امن = new DataView(درخواست_اتصال_مجرای_امن.buffer);
    درخواست_اتصال_مجرای_امن[0] = 0x10;
    درخواست_اتصال_مجرای_امن[1] = 0x01;
    نمای_اتصال_مجرای_امن.setUint16(2, درخواست_اتصال_مجرای_امن.byteLength | 0x8000);
    نمای_اتصال_مجرای_امن.setUint16(4, 0x0001);
    نمای_اتصال_مجرای_امن.setUint16(6, 1);
    درخواست_اتصال_مجرای_امن[9] = 1;
    نمای_اتصال_مجرای_امن.setUint16(10, 4 + encapsulatedProtocol.byteLength);
    درخواست_اتصال_مجرای_امن.set(encapsulatedProtocol, 12);

    await withTimeout(
      writer.write(
        پیوند_بایت_داده(
          httpRequest,
          درخواست_اتصال_مجرای_امن,
          ساخت_بسته_داده_مجرای_امن(
            buildPppConfigurePacket(0xc021, 1, pppIdentifier++, [{ type: 1, data: maximumReceiveUnit }]),
          ),
        ),
      ),
      CONNECT_TIMEOUT_MS,
      گشا("U1NUUCBIVFRQIGhhbmRzaGFrZSByZXF1ZXN0IHRpbWVkIG91dA=="),
    );

    const statusLine = await withTimeout(
      readHttpLine(),
      CONNECT_TIMEOUT_MS,
      گشا("U1NUUCBIVFRQIGhhbmRzaGFrZSB0aW1lZCBvdXQ="),
    );
    for (;;) {
      const line = await withTimeout(
        readHttpLine(),
        CONNECT_TIMEOUT_MS,
        گشا("U1NUUCBIVFRQIGhlYWRlciByZWFkIHRpbWVkIG91dA=="),
      );
      if (line === "") break;
    }
    if (!/HTTP\/\d(?:\.\d)?\s+2\d\d/i.test(statusLine))
      throw new Error(`${گشا("U1NUUCBIVFRQIGhhbmRzaGFrZSBmYWlsZWQ6IA==")}${statusLine || "invalid status"}`);

    let localLcpAcked = false,
      peerLcpAcked = false,
      papRequired = false,
      papSent = false,
      papDone = false,
      ipcpStarted = false,
      ipcpFinished = false,
      sourceIp = null;
    const sendPapIfReady = async () => {
      if (!localLcpAcked || !peerLcpAcked || !papRequired || papSent) return;
      if (میانجی.username === null || میانجی.password === null)
        throw new Error(گشا("U1NUUCBzZXJ2ZXIgcmVxdWlyZXMgUEFQIGF1dGhlbnRpY2F0aW9u"));
      const username = textEncoder.encode(میانجی.username);
      const password = textEncoder.encode(میانجی.password);
      if (username.byteLength > 255 || password.byteLength > 255)
        throw new Error(گشا("U1NUUCB1c2VybmFtZS9wYXNzd29yZCBpcyB0b28gbG9uZw=="));
      const papLength = 6 + username.byteLength + password.byteLength;
      const frame = new Uint8Array(2 + papLength);
      const view = new DataView(frame.buffer);
      view.setUint16(0, 0xc023);
      frame[2] = 1;
      frame[3] = pppIdentifier++;
      view.setUint16(4, papLength);
      frame[6] = username.byteLength;
      frame.set(username, 7);
      frame[7 + username.byteLength] = password.byteLength;
      frame.set(password, 8 + username.byteLength);
      await withTimeout(
        writer.write(ساخت_بسته_داده_مجرای_امن(frame)),
        CONNECT_TIMEOUT_MS,
        گشا("U1NUUCBQQVAgYXV0aGVudGljYXRpb24gcmVxdWVzdCB0aW1lZCBvdXQ="),
      );
      papSent = true;
    };
    const startIpcpIfReady = async () => {
      if (!localLcpAcked || !peerLcpAcked || ipcpStarted || (papRequired && !papDone)) return;
      await withTimeout(
        writer.write(
          ساخت_بسته_داده_مجرای_امن(
            buildPppConfigurePacket(0x8021, 1, pppIdentifier++, [{ type: 3, data: new Uint8Array(4) }]),
          ),
        ),
        CONNECT_TIMEOUT_MS,
        گشا("U1NUUCBJUENQIHJlcXVlc3QgdGltZWQgb3V0"),
      );
      ipcpStarted = true;
    };

    for (let round = 0; round < 50 && !ipcpFinished; round++) {
      const packet = await readPacket(CONNECT_TIMEOUT_MS);
      if (packet.isControl) continue;
      const ppp = parsePPPFrame(packet.body);
      if (!ppp) continue;

      if (ppp.protocol === 0xc021) {
        if (ppp.code === 1) {
          const authOption = parsePppOptions(ppp.payload).find((option) => option.type === 3);
          if (authOption?.data?.byteLength >= 2) {
            const authProtocol = خواندن_شانزده_بیتی_مجرای_امن(authOption.data);
            if (authProtocol !== 0xc023)
              throw new Error(
                `${گشا("U1NUUCB1bnN1cHBvcnRlZCBQUFAgYXV0aGVudGljYXRpb24gcHJvdG9jb2w6IDB4")}${authProtocol.toString(16)}`,
              );
            papRequired = true;
          }
          const ack = new Uint8Array(ppp.rawPacket);
          ack[2] = 2;
          await withTimeout(
            writer.write(ساخت_بسته_داده_مجرای_امن(ack)),
            CONNECT_TIMEOUT_MS,
            گشا("U1NUUCBMQ1AgQ29uZmlndXJlLUFjayB0aW1lZCBvdXQ="),
          );
          peerLcpAcked = true;
          await sendPapIfReady();
          await startIpcpIfReady();
        } else if (ppp.code === 2) {
          localLcpAcked = true;
          await sendPapIfReady();
          await startIpcpIfReady();
        }
        continue;
      }

      if (ppp.protocol === 0xc023) {
        if (ppp.code === 2) {
          papDone = true;
          await startIpcpIfReady();
        } else if (ppp.code === 3) throw new Error(گشا("U1NUUCBQQVAgYXV0aGVudGljYXRpb24gZmFpbGVk"));
        continue;
      }

      if (ppp.protocol === 0x8021) {
        if (ppp.code === 1) {
          const ack = new Uint8Array(ppp.rawPacket);
          ack[2] = 2;
          await withTimeout(
            writer.write(ساخت_بسته_داده_مجرای_امن(ack)),
            CONNECT_TIMEOUT_MS,
            گشا("U1NUUCBJUENQIENvbmZpZ3VyZS1BY2sgdGltZWQgb3V0"),
          );
          await startIpcpIfReady();
        } else if (ppp.code === 3) {
          const addressOption = parsePppOptions(ppp.payload).find((option) => option.type === 3);
          if (addressOption?.data?.byteLength === 4) {
            sourceIp = [...addressOption.data].join(".");
            await withTimeout(
              writer.write(
                ساخت_بسته_داده_مجرای_امن(
                  buildPppConfigurePacket(0x8021, 1, pppIdentifier++, [{ type: 3, data: addressOption.data }]),
                ),
              ),
              CONNECT_TIMEOUT_MS,
              گشا("U1NUUCBJUENQIGFkZHJlc3MgcmVxdWVzdCB0aW1lZCBvdXQ="),
            );
            ipcpStarted = true;
          }
        } else if (ppp.code === 2) {
          const addressOption = parsePppOptions(ppp.payload).find((option) => option.type === 3);
          if (addressOption?.data?.byteLength === 4) sourceIp = [...addressOption.data].join(".");
          ipcpFinished = true;
        }
      }
    }
    if (!sourceIp) throw new Error(گشا("U1NUUCBkaWQgbm90IGFzc2lnbiBhbiBJUHY0IGFkZHJlc3M="));

    const target = stripIPv6Brackets(targetHost);
    /**/
    let targetIp = isIPv4(target) ? target : null;
    if (!targetIp) {
      const records = await دی_ان_اس_امن_پرس_وجو(target, "A");
      const recordData = records.find((item) => item.type === 1 && isIPv4(item.data))?.data;
      targetIp = typeof recordData === "string" ? recordData : null;
    }
    if (!targetIp) throw new Error(`Could not resolve ${targetHost}${گشا("IHRvIGFuIElQdjQgYWRkcmVzcyBmb3IgU1NUUA==")}`);

    const sourcePort = 10000 + (تصادفی_شانزده_بیتی_مجرای_امن() % 50000);
    const sourceAddress = new Uint8Array(
      String(sourceIp || "")
        .split(".")
        .map(Number),
    );
    const destinationAddress = new Uint8Array(
      String(targetIp || "")
        .split(".")
        .map(Number),
    );
    let sequenceNumber = خواندن_سی_ودو_بیتی_مجرای_امن(crypto.getRandomValues(new Uint8Array(4)));
    let acknowledgementNumber = 0;
    const ipHeaderTemplate = new Uint8Array(20);
    ipHeaderTemplate.set([0x45, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 64, 6]);
    ipHeaderTemplate.set(sourceAddress, 12);
    ipHeaderTemplate.set(destinationAddress, 16);
    const tcpPseudoHeader = new Uint8Array(1432);
    tcpPseudoHeader.set(sourceAddress);
    tcpPseudoHeader.set(destinationAddress, 4);
    tcpPseudoHeader[9] = 6;
    const buildTcpFrame = (flags, payload = بایت_های_خالی_مجرای_امن) => {
      const bytes = داده_تبدیل_آرایه_بایتی(payload);
      const payloadLength = bytes.byteLength;
      const tcpLength = 20 + payloadLength;
      const ipLength = 20 + tcpLength;
      const طول_مجرای_امن = 8 + ipLength;
      const frame = new Uint8Array(طول_مجرای_امن);
      const view = new DataView(frame.buffer);
      frame.set([0x10, 0x00, ((طول_مجرای_امن >> 8) & 0x0f) | 0x80, طول_مجرای_امن & 0xff, 0xff, 0x03, 0x00, 0x21]);
      frame.set(ipHeaderTemplate, 8);
      view.setUint16(10, ipLength);
      view.setUint16(12, تصادفی_شانزده_بیتی_مجرای_امن());
      view.setUint16(18, internetChecksum(frame, 8, 20));
      view.setUint16(28, sourcePort);
      view.setUint16(30, targetPort);
      view.setUint32(32, sequenceNumber);
      view.setUint32(36, acknowledgementNumber);
      frame[40] = 0x50;
      frame[41] = flags;
      view.setUint16(42, 65535);
      if (payloadLength) frame.set(bytes, 48);
      tcpPseudoHeader[10] = tcpLength >> 8;
      tcpPseudoHeader[11] = tcpLength & 0xff;
      tcpPseudoHeader.set(frame.subarray(28, 28 + tcpLength), 12);
      view.setUint16(44, internetChecksum(tcpPseudoHeader, 0, 12 + tcpLength));
      return frame;
    };
    const matchIncomingIpPacket = (ipPacket) => {
      if (ipPacket.byteLength < 40 || ipPacket[9] !== 6) return null;
      const ipHeaderLength = (ipPacket[0] & 0x0f) * 4;
      if (ipPacket.byteLength < ipHeaderLength + 20) return null;
      if (خواندن_شانزده_بیتی_مجرای_امن(ipPacket, ipHeaderLength) !== targetPort) return null;
      if (خواندن_شانزده_بیتی_مجرای_امن(ipPacket, ipHeaderLength + 2) !== sourcePort) return null;
      return {
        flags: ipPacket[ipHeaderLength + 13],
        sequence: خواندن_سی_ودو_بیتی_مجرای_امن(ipPacket, ipHeaderLength + 4),
        payloadOffset: ipHeaderLength + ((ipPacket[ipHeaderLength + 12] >> 4) & 0x0f) * 4,
      };
    };

    await withTimeout(
      writer.write(buildTcpFrame(0x02)),
      CONNECT_TIMEOUT_MS,
      گشا("U1NUUCBUQ1AgU1lOIHdyaXRlIHRpbWVkIG91dA=="),
    );
    sequenceNumber = (sequenceNumber + 1) >>> 0;
    let tcpReady = false;
    for (let attempt = 0; attempt < 30; attempt++) {
      const packet = await readPacket(CONNECT_TIMEOUT_MS);
      if (packet.isControl) continue;
      const ppp = parsePPPFrame(packet.body);
      if (!ppp || ppp.protocol !== 0x0021) continue;
      const tcp = matchIncomingIpPacket(ppp.ipPacket);
      if (!tcp || (tcp.flags & 0x12) !== 0x12) continue;
      acknowledgementNumber = (tcp.sequence + 1) >>> 0;
      await withTimeout(
        writer.write(buildTcpFrame(0x10)),
        CONNECT_TIMEOUT_MS,
        گشا("U1NUUCBUQ1AgQUNLIHdyaXRlIHRpbWVkIG91dA=="),
      );
      tcpReady = true;
      break;
    }
    if (!tcpReady) throw new Error(گشا("VENQIGhhbmRzaGFrZSB0aHJvdWdoIFNTVFAgdGltZWQgb3V0"));

    /**/
    let streamController = null;
    const readable = new ReadableStream({
      start(controller) {
        streamController = controller;
      },
      cancel() {
        close();
      },
    });

    (async () => {
      try {
        let pendingChunks = [],
          pendingLength = 0;
        const flush = () => {
          if (!pendingLength) return;
          if (!streamController) throw new Error(گشا("U1NUUCByZWFkYWJsZSBzdHJlYW0gaXMgbm90IHJlYWR5"));
          streamController.enqueue(pendingChunks.length === 1 ? pendingChunks[0] : پیوند_بایت_داده(...pendingChunks));
          pendingChunks = [];
          pendingLength = 0;
          writer.write(buildTcpFrame(0x10)).catch(() => {});
        };

        for (;;) {
          const packet = await readPacket(60000);
          if (packet.isControl) continue;
          const ppp = parsePPPFrame(packet.body);
          if (!ppp || ppp.protocol !== 0x0021) continue;
          const incoming = matchIncomingIpPacket(ppp.ipPacket);
          if (!incoming) continue;

          if (incoming.payloadOffset < ppp.ipPacket.byteLength) {
            const payload = ppp.ipPacket.subarray(incoming.payloadOffset);
            if (payload.byteLength) {
              acknowledgementNumber = (incoming.sequence + payload.byteLength) >>> 0;
              pendingChunks.push(new Uint8Array(payload));
              pendingLength += payload.byteLength;
            }
          }

          if (incoming.flags & 0x01) {
            flush();
            acknowledgementNumber = (acknowledgementNumber + 1) >>> 0;
            writer.write(buildTcpFrame(0x11)).catch(() => {});
            const controller = streamController;
            if (controller) {
              try {
                controller.close();
              } catch (e) {}
            }
            close();
            return;
          }

          if (bufferedBytes.byteLength < 4 || pendingLength >= 32768) flush();
        }
      } catch (error) {
        const controller = streamController;
        if (controller) {
          try {
            controller.error(error);
          } catch (e) {}
        }
        settleClosed(rejectClosed, error);
        try {
          socket?.close?.();
        } catch (e) {}
      }
    })();

    const writable = new WritableStream({
      async write(chunk) {
        const bytes = داده_تبدیل_آرایه_بایتی(chunk);
        if (!bytes.byteLength) return;
        if (bytes.byteLength <= حداکثر_اندازه_بخش_مجرای_امن) {
          await writer.write(buildTcpFrame(0x18, bytes));
          sequenceNumber = (sequenceNumber + bytes.byteLength) >>> 0;
          return;
        }
        const frames = [];
        for (let offset = 0; offset < bytes.byteLength; offset += حداکثر_اندازه_بخش_مجرای_امن) {
          const segment = bytes.subarray(offset, Math.min(offset + حداکثر_اندازه_بخش_مجرای_امن, bytes.byteLength));
          frames.push(buildTcpFrame(0x18, segment));
          sequenceNumber = (sequenceNumber + segment.byteLength) >>> 0;
        }
        await writer.write(پیوند_بایت_داده(...frames));
      },
      close() {
        return writer.write(buildTcpFrame(0x11)).catch(() => {});
      },
      abort(error) {
        close();
        if (error) settleClosed(rejectClosed, error);
      },
    });

    return { readable, writable, closed, close };
  } catch (error) {
    close();
    throw error;
  }
}
// ===== توابع کاربردی =====
/**/
function base64SecretEncode(plaintext, secret) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plaintext);
  const key = encoder.encode(secret);
  const mixed = new Uint8Array(data.length);

  for (let i = 0; i < data.length; i++) {
    mixed[i] = data[i] ^ key[i % key.length];
  }

  //
  let binary = "";
  for (let i = 0; i < mixed.length; i++) {
    binary += String.fromCharCode(mixed[i]);
  }
  return btoa(binary);
}

/**/
function base64SecretDecode(encoded, secret) {
  const binary = atob(encoded);
  const mixed = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    mixed[i] = binary.charCodeAt(i);
  }

  const encoder = new TextEncoder();
  const key = encoder.encode(secret);
  const data = new Uint8Array(mixed.length);

  for (let i = 0; i < mixed.length; i++) {
    data[i] = mixed[i] ^ key[i % key.length];
  }

  const decoder = new TextDecoder();
  return decoder.decode(data);
}

function گرفتن_انتقال_پروتکل_پیکربندی(پیکربندی = {}) {
  const است_جی_آر_پی_سی = پیکربندی[گشا("5Lyg6L6T5Y2P6K6u")] === "grpc";
  const { [گشا("5aS0")]: این_دستگاه_پوشش_سرآیند, [گشا("6ZSu")]: این_دستگاه_پوشش_کلید } =
    گرفتن_ضربدری_اچ_تی_تی_پی_پوشش_نشانه(پیکربندی.UUID);
  const ضربدری_مبهم_جیسون = {
    xPaddingObfsMode: true,
    xPaddingMethod: "tokenish",
    xPaddingPlacement: "queryInHeader",
    xPaddingHeader: این_دستگاه_پوشش_سرآیند,
    xPaddingKey: این_دستگاه_پوشش_کلید,
  };
  return {
    type: است_جی_آر_پی_سی
      ? پیکربندی[گشا("Z1JQQ+aooeW8jw==")] === "multi"
        ? "grpc&mode=multi"
        : "grpc&mode=gun"
      : پیکربندی[گشا("5Lyg6L6T5Y2P6K6u")] === "xhttp"
        ? `xhttp&mode=stream-one&extra=${encodeURIComponent(JSON.stringify(ضربدری_مبهم_جیسون))}`
        : "ws",
    [گشا("6Lev5b6E5a2X5q615ZCN")]: است_جی_آر_پی_سی ? "serviceName" : "path",
    [گشا("5Z+f5ZCN5a2X5q615ZCN")]: است_جی_آر_پی_سی ? "authority" : "host",
  };
}

function گرفتن_انتقال_مسیر_پارامتر_مقدار(پیکربندی = {}, گره_مسیر = "/", به_عنوان_برگزیده_اشتراک_سازنده = false) {
  const مسیر_مقدار = به_عنوان_برگزیده_اشتراک_سازنده
    ? "/"
    : پیکربندی[گشا("6ZqP5py66Lev5b6E")]
      ? تصادفی_مسیر(گره_مسیر)
      : گره_مسیر;
  if (پیکربندی[گشا("5Lyg6L6T5Y2P6K6u")] !== "grpc") return مسیر_مقدار;
  return مسیر_مقدار.split("?")[0] || "/";
}

function log(...args) {
  if (گزارش_اشکال_زدایی_چاپ) console.log(...args);
}

function برنامه_الف_اشتراک_پیکربندی_پرونده_وصله_گرم(برنامه_الف_اصلی_اشتراک_محتوا, config_JSON = {}) {
  const uuid = config_JSON?.UUID || null;
  const پنهان_فعال = Boolean(config_JSON?.ECH);
  const HOSTS = Array.isArray(config_JSON?.HOSTS) ? [...config_JSON.HOSTS] : [];
  const ECH_SNI = config_JSON?.ECHConfig?.SNI || null;
  const ECH_DNS = config_JSON?.ECHConfig?.DNS;
  const نیاز_پردازش_پنهان = Boolean(uuid && پنهان_فعال);
  const gRPCUserAgent =
    typeof config_JSON?.gRPCUserAgent === "string" && config_JSON.gRPCUserAgent.trim()
      ? config_JSON.gRPCUserAgent.trim()
      : null;
  const نیاز_پردازش_جی_آر_پی_سی = config_JSON?.[گشا("5Lyg6L6T5Y2P6K6u")] === "grpc" && Boolean(gRPCUserAgent);
  const gRPCUserAgentYAML = gRPCUserAgent ? JSON.stringify(gRPCUserAgent) : null;
  let قالب_برنامه_الف = برنامه_الف_اصلی_اشتراک_محتوا.replace(/mode:\s*Rule\b/g, "mode: rule");

  const baseDnsBlock = `dns:
  enable: true
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  use-hosts: true
  nameserver:
    - https://sm2.doh.pub/dns-query
    - https://dns.alidns.com/dns-query
  fallback:
    - 8.8.4.4
    - 208.67.220.220
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
      - 127.0.0.1/32
      - 0.0.0.0/32
    domain:
      - '+.google.com'
      - '+.facebook.com'
      - '+.youtube.com'
`;

  const افزودن_عامل_کاربر_درون_خطی = (text) =>
    text.replace(/grpc-opts:\s*\{([\s\S]*?)\}/i, (all, inner) => {
      if (/grpc-user-agent\s*:/i.test(inner)) return all;
      let content = inner.trim();
      if (content.endsWith(",")) content = content.slice(0, -1).trim();
      const patchedContent = content
        ? `${content}, grpc-user-agent: ${gRPCUserAgentYAML}`
        : `grpc-user-agent: ${gRPCUserAgentYAML}`;
      return `grpc-opts: {${patchedContent}}`;
    });
  const تطبیق_با_جی_آر_پی_سی_شبکه_شبکه = (text) =>
    /(?:^|[,{])\s*network:\s*(?:"grpc"|'grpc'|grpc)(?=\s*(?:[,}\n#]|$))/im.test(text);
  const گرفتن_میانجی_نوع = (nodeText) => nodeText.match(/type:\s*(\w+)/)?.[1] || "vl" + "ess";
  const گرفتن_اعتبارنامه_مقدار = (nodeText, isFlowStyle) => {
    const credentialField = گرفتن_میانجی_نوع(nodeText) === گشا("dHJvamFu") ? "password" : "uuid";
    const pattern = new RegExp(`${credentialField}:\\s*${isFlowStyle ? "([^,}\\n]+)" : "([^\\n]+)"}`);
    return nodeText.match(pattern)?.[1]?.trim() || null;
  };
  const درج_سیاست_سرور_نام = (yaml, hostsEntries) => {
    if (/^\s{2}nameserver-policy:\s*(?:\n|$)/m.test(yaml)) {
      return yaml.replace(/^(\s{2}nameserver-policy:\s*\n)/m, `$1${hostsEntries}\n`);
    }
    const lines = yaml.split("\n");
    let dnsBlockEndIndex = -1;
    let inDnsBlock = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/^dns:\s*$/.test(line)) {
        inDnsBlock = true;
        continue;
      }
      if (inDnsBlock && /^[a-zA-Z]/.test(line)) {
        dnsBlockEndIndex = i;
        break;
      }
    }
    const nameserverPolicyBlock = `  nameserver-policy:\n${hostsEntries}`;
    if (dnsBlockEndIndex !== -1) lines.splice(dnsBlockEndIndex, 0, nameserverPolicyBlock);
    else lines.push(nameserverPolicyBlock);
    return lines.join("\n");
  };
  const افزودن_جریان_قالب_عامل_کاربر_جی_آر_پی_سی = (nodeText) => {
    if (!تطبیق_با_جی_آر_پی_سی_شبکه_شبکه(nodeText) || /grpc-user-agent\s*:/i.test(nodeText)) return nodeText;
    if (/grpc-opts:\s*\{/i.test(nodeText)) return افزودن_عامل_کاربر_درون_خطی(nodeText);
    return nodeText.replace(/\}(\s*)$/, `, grpc-opts: {grpc-user-agent: ${gRPCUserAgentYAML}}}$1`);
  };
  const افزودن_قطعه_قالب_عامل_کاربر_جی_آر_پی_سی = (nodeLines, topLevelIndent) => {
    const سطح_بالا_تورفتگی = " ".repeat(topLevelIndent);
    let grpcOptsIndex = -1;
    for (let idx = 0; idx < nodeLines.length; idx++) {
      const line = nodeLines[idx];
      if (!line.trim()) continue;
      const indent = line.search(/\S/);
      if (indent !== topLevelIndent) continue;
      if (/^\s*grpc-opts:\s*(?:#.*)?$/.test(line) || /^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(line)) {
        grpcOptsIndex = idx;
        break;
      }
    }
    if (grpcOptsIndex === -1) {
      let insertIndex = -1;
      for (let j = nodeLines.length - 1; j >= 0; j--) {
        if (nodeLines[j].trim()) {
          insertIndex = j;
          break;
        }
      }
      if (insertIndex >= 0)
        nodeLines.splice(
          insertIndex + 1,
          0,
          `${سطح_بالا_تورفتگی}grpc-opts:`,
          `${سطح_بالا_تورفتگی}  grpc-user-agent: ${gRPCUserAgentYAML}`,
        );
      return nodeLines;
    }
    const grpcLine = nodeLines[grpcOptsIndex];
    if (/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(grpcLine)) {
      if (!/grpc-user-agent\s*:/i.test(grpcLine)) nodeLines[grpcOptsIndex] = افزودن_عامل_کاربر_درون_خطی(grpcLine);
      return nodeLines;
    }
    let blockEndIndex = nodeLines.length;
    let فرزند_تورفتگی = topLevelIndent + 2;
    let دارای_عامل_کاربر_جی_آر_پی_سی = false;
    for (let idx = grpcOptsIndex + 1; idx < nodeLines.length; idx++) {
      const line = nodeLines[idx];
      const trimmed = line.trim();
      if (!trimmed) continue;
      const indent = line.search(/\S/);
      if (indent <= topLevelIndent) {
        blockEndIndex = idx;
        break;
      }
      if (indent > topLevelIndent && فرزند_تورفتگی === topLevelIndent + 2) فرزند_تورفتگی = indent;
      if (/^grpc-user-agent\s*:/.test(trimmed)) {
        دارای_عامل_کاربر_جی_آر_پی_سی = true;
        break;
      }
    }
    if (!دارای_عامل_کاربر_جی_آر_پی_سی)
      nodeLines.splice(blockEndIndex, 0, `${" ".repeat(فرزند_تورفتگی)}grpc-user-agent: ${gRPCUserAgentYAML}`);
    return nodeLines;
  };
  const افزودن_قطعه_قالب_گزینه_پنهان = (nodeLines, topLevelIndent) => {
    let insertIndex = -1;
    for (let j = nodeLines.length - 1; j >= 0; j--) {
      if (nodeLines[j].trim()) {
        insertIndex = j;
        break;
      }
    }
    if (insertIndex < 0) return nodeLines;
    const indent = " ".repeat(topLevelIndent);
    const echOptsLines = [`${indent}ech-opts:`, `${indent}  enable: true`];
    if (ECH_SNI) echOptsLines.push(`${indent}  query-server-name: ${ECH_SNI}`);
    nodeLines.splice(insertIndex + 1, 0, ...echOptsLines);
    return nodeLines;
  };

  if (!/^dns:\s*(?:\n|$)/m.test(قالب_برنامه_الف)) قالب_برنامه_الف = baseDnsBlock + قالب_برنامه_الف;
  if (ECH_SNI && !HOSTS.includes(ECH_SNI)) HOSTS.push(ECH_SNI);

  if (پنهان_فعال && HOSTS.length > 0) {
    const hostsEntries = HOSTS.map((host) => `    "${host}": ${ECH_DNS ? ECH_DNS : ""}`).join("\n");
    قالب_برنامه_الف = درج_سیاست_سرور_نام(قالب_برنامه_الف, hostsEntries);
  }

  if (!نیاز_پردازش_پنهان && !نیاز_پردازش_جی_آر_پی_سی) return قالب_برنامه_الف;

  const lines = قالب_برنامه_الف.split("\n");
  const processedLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("- {")) {
      let fullNode = line;
      let braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      while (braceCount > 0 && i + 1 < lines.length) {
        i++;
        fullNode += "\n" + lines[i];
        braceCount += (lines[i].match(/\{/g) || []).length - (lines[i].match(/\}/g) || []).length;
      }
      if (نیاز_پردازش_جی_آر_پی_سی) fullNode = افزودن_جریان_قالب_عامل_کاربر_جی_آر_پی_سی(fullNode);
      if (نیاز_پردازش_پنهان && گرفتن_اعتبارنامه_مقدار(fullNode, true) === uuid.trim()) {
        fullNode = fullNode.replace(
          /\}(\s*)$/,
          `, ech-opts: {enable: true${ECH_SNI ? `, query-server-name: ${ECH_SNI}` : ""}}}$1`,
        );
      }
      processedLines.push(fullNode);
      i++;
    } else if (trimmedLine.startsWith("- name:")) {
      let nodeLines = [line];
      let baseIndent = line.search(/\S/);
      let topLevelIndent = baseIndent + 2;
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();
        if (!nextTrimmed) {
          nodeLines.push(nextLine);
          i++;
          break;
        }
        const nextIndent = nextLine.search(/\S/);
        if (nextIndent <= baseIndent && nextTrimmed.startsWith("- ")) {
          break;
        }
        if (nextIndent < baseIndent && nextTrimmed) {
          break;
        }
        nodeLines.push(nextLine);
        i++;
      }
      let nodeText = nodeLines.join("\n");
      if (نیاز_پردازش_جی_آر_پی_سی && تطبیق_با_جی_آر_پی_سی_شبکه_شبکه(nodeText)) {
        nodeLines = افزودن_قطعه_قالب_عامل_کاربر_جی_آر_پی_سی(nodeLines, topLevelIndent);
        nodeText = nodeLines.join("\n");
      }
      if (نیاز_پردازش_پنهان && گرفتن_اعتبارنامه_مقدار(nodeText, false) === uuid.trim())
        nodeLines = افزودن_قطعه_قالب_گزینه_پنهان(nodeLines, topLevelIndent);
      processedLines.push(...nodeLines);
    } else {
      processedLines.push(line);
      i++;
    }
  }

  return processedLines.join("\n");
}

async function برنامه_ب_اشتراک_پیکربندی_پرونده_وصله_گرم(برنامه_ب_اصلی_اشتراک_محتوا, config_JSON = {}) {
  const uuid = config_JSON?.UUID || null;
  const fingerprint = config_JSON?.Fingerprint || "chrome";
  const پنهان_فعال = Boolean(config_JSON?.ECH);
  const ECH_SNI = config_JSON?.ECHConfig?.SNI || "cloudflare-ech.com";
  const sb_json_text = برنامه_ب_اصلی_اشتراک_محتوا.replace("1.1.1.1", "8.8.8.8").replace("1.0.0.1", "8.8.4.4");
  try {
    const config = JSON.parse(sb_json_text);
    const آرایه_سازی = (value) => (value === undefined || value === null ? [] : Array.isArray(value) ? value : [value]);
    const تضمین_مسیر = () => (config.route = config.route && typeof config.route === "object" ? config.route : {});
    const گرفتن_دی_ان_اس_قاعده_سرور = (rule) =>
      rule && typeof rule === "object" && !Array.isArray(rule) && typeof rule.server === "string" ? rule.server : null;
    const افزودن_مجموعه_قاعده = (type, code) => {
      if (!code || typeof code !== "string") return null;
      const route = تضمین_مسیر(),
        tag = `${type}-${code}`,
        ruleSet = Array.isArray(route.rule_set) ? route.rule_set : آرایه_سازی(route.rule_set);
      if (!ruleSet.some((item) => item?.tag === tag)) {
        const legacyOptions = type === "geoip" ? route.geoip : route.geosite;
        ruleSet.push({
          tag,
          type: "remote",
          format: "binary",
          url: `https://raw.githubusercontent.com/SagerNet/sing-${type}/rule-set/${tag}.srs`,
          ...(legacyOptions?.download_detour ? { download_detour: legacyOptions.download_detour } : {}),
        });
        config.experimental = config.experimental && typeof config.experimental === "object" ? config.experimental : {};
        config.experimental.cache_file =
          config.experimental.cache_file && typeof config.experimental.cache_file === "object"
            ? config.experimental.cache_file
            : {};
        config.experimental.cache_file.enabled ??= true;
      }
      route.rule_set = ruleSet;
      return tag;
    };

    const انتقال_فیلد_مجموعه_قاعده = (rule) => {
      if (!rule || typeof rule !== "object" || Array.isArray(rule)) return rule;
      if (rule.type === "logical" && Array.isArray(rule.rules)) {
        rule.rules = rule.rules.map(انتقال_فیلد_مجموعه_قاعده);
        return rule;
      }
      const tags = [];
      for (const geoip of آرایه_سازی(rule.geoip)) {
        if (typeof geoip !== "string") continue;
        if (geoip.toLowerCase() === "private") rule.ip_is_private = true;
        else tags.push(افزودن_مجموعه_قاعده("geoip", geoip));
      }
      for (const sourceGeoip of آرایه_سازی(rule.source_geoip)) {
        if (typeof sourceGeoip !== "string") continue;
        tags.push(افزودن_مجموعه_قاعده("geoip", sourceGeoip));
        rule.rule_set_ip_cidr_match_source = true;
      }
      for (const geosite of آرایه_سازی(rule.geosite))
        if (typeof geosite === "string") tags.push(افزودن_مجموعه_قاعده("geosite", geosite));
      if (tags.length) rule.rule_set = [...new Set([...آرایه_سازی(rule.rule_set), ...tags].filter(Boolean))];
      delete rule.geoip;
      delete rule.source_geoip;
      delete rule.geosite;
      return rule;
    };

    const انتقال_دی_ان_اس_قاعده = (rule, rcodeServerMap) => {
      rule = انتقال_فیلد_مجموعه_قاعده(rule);
      if (!rule || typeof rule !== "object" || Array.isArray(rule)) return rule;
      if (rule.type === "logical" && Array.isArray(rule.rules)) {
        rule.rules = rule.rules.map((childRule) => انتقال_دی_ان_اس_قاعده(childRule, rcodeServerMap));
        return rule;
      }
      const serverTag = گرفتن_دی_ان_اس_قاعده_سرور(rule);
      if (serverTag && rcodeServerMap.has(serverTag)) {
        for (const key of ["server", "strategy", "disable_cache", "rewrite_ttl", "client_subnet", "timeout"])
          delete rule[key];
        rule.action = "predefined";
        rule.rcode = rcodeServerMap.get(serverTag);
      } else if (serverTag && !rule.action) rule.action = "route";
      return rule;
    };

    if (Array.isArray(config.inbounds)) {
      for (const inbound of config.inbounds) {
        if (!inbound || typeof inbound !== "object" || inbound.type !== "tun") continue;
        for (const migration of [
          { targetKey: "address", sourceKeys: ["inet4_address", "inet6_address"] },
          { targetKey: "route_address", sourceKeys: ["inet4_route_address", "inet6_route_address"] },
          {
            targetKey: "route_exclude_address",
            sourceKeys: ["inet4_route_exclude_address", "inet6_route_exclude_address"],
          },
        ]) {
          const values = آرایه_سازی(inbound[migration.targetKey]);
          for (const sourceKey of migration.sourceKeys) values.push(...آرایه_سازی(inbound[sourceKey]));
          if (values.length) inbound[migration.targetKey] = [...new Set(values)];
          for (const sourceKey of migration.sourceKeys) delete inbound[sourceKey];
        }
        if (inbound.tag) {
          const addedRules = [];
          if (inbound.domain_strategy)
            addedRules.push({ inbound: inbound.tag, action: "resolve", strategy: inbound.domain_strategy });
          if (inbound.sniff) {
            const sniffRule = { inbound: inbound.tag, action: "sniff" };
            if (inbound.sniff_timeout) sniffRule.timeout = inbound.sniff_timeout;
            addedRules.push(sniffRule);
          }
          if (addedRules.length) {
            const route = تضمین_مسیر();
            route.rules = [...addedRules, ...آرایه_سازی(route.rules)];
          }
        }
        delete inbound.sniff;
        delete inbound.sniff_timeout;
        delete inbound.domain_strategy;
      }
    }

    if (config?.route && typeof config.route === "object" && Array.isArray(config.route.rules)) {
      const وصله_مسیریابی_قاعده = (rule) => {
        rule = انتقال_فیلد_مجموعه_قاعده(rule);
        if (rule?.type === "logical" && Array.isArray(rule.rules)) rule.rules = rule.rules.map(وصله_مسیریابی_قاعده);
        else if (rule && typeof rule === "object" && !Array.isArray(rule) && rule.outbound && !rule.action)
          rule.action = "route";
        return rule;
      };
      config.route.rules = config.route.rules.map(وصله_مسیریابی_قاعده);
    }

    const dns = config?.dns;
    if (dns && typeof dns === "object") {
      const legacyFakeIP = dns.fakeip && typeof dns.fakeip === "object" ? dns.fakeip : null;
      const rcodeServerMap = new Map();
      const دی_ان_اس_نشانی_پروتکل_نوع = {
        "tcp:": "tcp",
        "udp:": "udp",
        "tls:": "tls",
        "quic:": "quic",
        "https:": "https",
        "h3:": "h3",
      };
      const کدپاسخ_نگاشت = {
        success: "NOERROR",
        format_error: "FORMERR",
        server_failure: "SERVFAIL",
        name_error: "NXDOMAIN",
        not_implemented: "NOTIMP",
        refused: "REFUSED",
      };
      let hasFakeIPServer = false;

      if (Array.isArray(dns.servers)) {
        const migratedServers = [];
        for (const originalServer of dns.servers) {
          if (!originalServer || typeof originalServer !== "object" || Array.isArray(originalServer)) {
            migratedServers.push(originalServer);
            continue;
          }

          const server = { ...originalServer };
          let parsedAddress = null,
            parsedRCode = "",
            rawAddress = typeof server.address === "string" ? server.address.trim() : "";
          if (rawAddress) {
            const lowerAddress = rawAddress.toLowerCase();
            if (lowerAddress === "fakeip") parsedAddress = { type: "fakeip" };
            else if (lowerAddress === "local") parsedAddress = { type: "local" };
            else if (lowerAddress.startsWith("rcode://")) {
              parsedAddress = { type: "rcode" };
              parsedRCode = rawAddress.slice("rcode://".length).toLowerCase();
            } else if (lowerAddress.startsWith("dhcp://")) {
              const dhcpInterface = rawAddress.slice("dhcp://".length);
              parsedAddress =
                dhcpInterface && dhcpInterface.toLowerCase() !== "auto"
                  ? { type: "dhcp", interface: dhcpInterface }
                  : { type: "dhcp" };
            } else {
              try {
                const addressURL = new URL(rawAddress);
                const type = دی_ان_اس_نشانی_پروتکل_نوع[addressURL.protocol.toLowerCase()];
                if (type) {
                  const parsedServer =
                    addressURL.hostname?.startsWith("[") && addressURL.hostname.endsWith("]")
                      ? addressURL.hostname.slice(1, -1)
                      : addressURL.hostname;
                  parsedAddress = {
                    type,
                    server: parsedServer || addressURL.host || rawAddress,
                    ...(addressURL.port ? { server_port: Number(addressURL.port) } : {}),
                    ...((type === "https" || type === "h3") &&
                    addressURL.pathname &&
                    addressURL.pathname !== "/dns-query"
                      ? { path: addressURL.pathname }
                      : {}),
                  };
                }
              } catch (_) {}
              if (!parsedAddress) parsedAddress = { type: "udp", server: rawAddress };
            }
          }

          if (parsedAddress?.type === "rcode") {
            const rcode = کدپاسخ_نگاشت[parsedRCode] || "NOERROR";
            if (typeof server.tag === "string" && server.tag) {
              rcodeServerMap.set(server.tag, rcode);
              rcodeServerMap.set(server.tag.startsWith("dns_") ? server.tag.slice(4) : `dns_${server.tag}`, rcode);
            }
            continue;
          }

          if (parsedAddress) {
            delete server.address;
            Object.assign(server, parsedAddress);
          }
          if (server.address_resolver !== undefined && server.domain_resolver === undefined)
            server.domain_resolver = server.address_resolver;
          if (server.address_strategy !== undefined && server.domain_strategy === undefined)
            server.domain_strategy = server.address_strategy;
          delete server.address_resolver;
          delete server.address_strategy;
          if (server.detour === "DIRECT") delete server.detour;

          if (server.type === "fakeip") {
            hasFakeIPServer = true;
            if (legacyFakeIP) {
              for (const key of ["inet4_range", "inet6_range"]) {
                if (legacyFakeIP[key] !== undefined && server[key] === undefined) server[key] = legacyFakeIP[key];
              }
            }
          }
          migratedServers.push(server);
        }
        dns.servers = migratedServers;
      }

      if (legacyFakeIP && !hasFakeIPServer && legacyFakeIP.enabled !== false) {
        const fakeIPServer = { type: "fakeip", tag: "fakeip" };
        for (const rule of Array.isArray(dns.rules) ? dns.rules : []) {
          const serverTag = گرفتن_دی_ان_اس_قاعده_سرور(rule);
          if (serverTag && serverTag.toLowerCase().includes("fakeip")) {
            fakeIPServer.tag = serverTag;
            break;
          }
        }
        for (const key of ["inet4_range", "inet6_range"]) {
          if (legacyFakeIP[key] !== undefined) fakeIPServer[key] = legacyFakeIP[key];
        }
        if (Array.isArray(dns.servers)) dns.servers.push(fakeIPServer);
        else dns.servers = [fakeIPServer];
      }

      if (Array.isArray(dns.rules)) {
        const migratedRules = [];
        for (const rule of dns.rules) {
          const serverTag = گرفتن_دی_ان_اس_قاعده_سرور(rule);
          const outbound = آرایه_سازی(rule?.outbound);
          const دی_ان_اس_مسیریابی_انتخاب_مورد_قلم_مرحله = new Set([
            "outbound",
            "server",
            "action",
            "strategy",
            "disable_cache",
            "rewrite_ttl",
            "client_subnet",
            "timeout",
          ]);
          const isOutboundAnyDNSRule =
            rule &&
            typeof rule === "object" &&
            !Array.isArray(rule) &&
            rule.type !== "logical" &&
            serverTag &&
            outbound.includes("any") &&
            Object.keys(rule).every((key) => دی_ان_اس_مسیریابی_انتخاب_مورد_قلم_مرحله.has(key));
          if (isOutboundAnyDNSRule) {
            const route = تضمین_مسیر();
            if (route.default_domain_resolver === undefined) {
              const resolver = { server: serverTag };
              for (const key of ["strategy", "disable_cache", "rewrite_ttl", "client_subnet", "timeout"]) {
                if (rule[key] !== undefined) resolver[key] = rule[key];
              }
              route.default_domain_resolver = Object.keys(resolver).length === 1 ? resolver.server : resolver;
            }
            continue;
          }
          migratedRules.push(انتقال_دی_ان_اس_قاعده(rule, rcodeServerMap));
        }
        dns.rules = migratedRules;
      }

      delete dns.fakeip;
      delete dns.independent_cache;
    }

    if (config?.route && typeof config.route === "object") {
      delete config.route.geoip;
      delete config.route.geosite;
    }
    if (config?.ntp?.detour === "DIRECT") delete config.ntp.detour;

    if (Array.isArray(config.outbounds)) {
      const outboundTags = new Set(config.outbounds.map((outbound) => outbound?.tag).filter(Boolean));
      const ارجاع_رد = (value) =>
        value === "REJECT" ||
        (value &&
          typeof value === "object" &&
          (Array.isArray(value) ? value.some(ارجاع_رد) : Object.values(value).some(ارجاع_رد)));
      if (!outboundTags.has("REJECT") && ارجاع_رد({ outbounds: config.outbounds, route: config.route }))
        config.outbounds.push({ type: "block", tag: "REJECT" });
    }

    //
    if (uuid) {
      config.outbounds?.forEach((outbound) => {
        //
        if ((outbound.uuid && outbound.uuid === uuid) || (outbound.password && outbound.password === uuid)) {
          //
          if (!outbound.tls) {
            outbound.tls = { enabled: true };
          }

          //
          if (fingerprint) {
            outbound.tls.utls = {
              enabled: true,
              fingerprint: fingerprint,
            };
          }

          //
          if (پنهان_فعال) {
            outbound.tls.ech = {
              enabled: true,
              query_server_name: ECH_SNI, //
              //
            };
          }
        }
      });
    }

    return JSON.stringify(config, null, 2);
  } catch (e) {
    console.error(گشا("U2luZ2JveOeDreihpeS4geaJp+ihjOWksei0pTo="), e);
    return JSON.stringify(JSON.parse(sb_json_text), null, 2);
  }
}

function برنامه_پ_اشتراک_پیکربندی_پرونده_وصله_گرم(content, url, config_JSON) {
  const هرخط_محتوا = content.includes("\r\n") ? content.split("\r\n") : content.split("\n");
  const کامل_گره_مسیر = config_JSON[گشا("6ZqP5py66Lev5b6E")]
    ? تصادفی_مسیر(config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")])
    : config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")];
  let خروجی_محتوا = "";
  for (let x of هرخط_محتوا) {
    if (x.includes("= tro" + "jan,") && !x.includes("ws=true") && !x.includes("ws-path=")) {
      const host = x.split("sni=")[1].split(",")[0];
      const آماده_تغییر_محتوا = `sni=${host}, skip-cert-verify=${config_JSON[گشا("6Lez6L+H6K+B5Lmm6aqM6K+B")]}`;
      const درست_محتوا = `sni=${host}, skip-cert-verify=${config_JSON[گشا("6Lez6L+H6K+B5Lmm6aqM6K+B")]}, ws=true, ws-path=${کامل_گره_مسیر.replace(/,/g, "%2C")}, ws-headers=Host:"${host}"`;
      خروجی_محتوا += x.replace(new RegExp(آماده_تغییر_محتوا, "g"), درست_محتوا).replace("[", "").replace("]", "") + "\n";
    } else {
      خروجی_محتوا += x + "\n";
    }
  }

  خروجی_محتوا =
    `#!MANAGED-CONFIG ${url} interval=${config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUBUpdateTime * 60 * 60} strict=false` +
    خروجی_محتوا.substring(خروجی_محتوا.indexOf("\n"));
  return خروجی_محتوا;
}

async function درخواست_گزارش_رکورد(
  env,
  request,
  دسترسی_آی_پی,
  درخواست_نوع = "Get_SUB",
  config_JSON,
  آیا_نوشتن_مخزن_گزارش = true,
) {
  try {
    const جاری_زمان = new Date();
    const گزارش_محتوا = {
      TYPE: درخواست_نوع,
      IP: دسترسی_آی_پی,
      ASN: `AS${request.cf.asn || "0"} ${request.cf.asOrganization || "Unknown"}`,
      CC: `${request.cf.country || "N/A"} ${request.cf.city || "N/A"}`,
      URL: request.url,
      UA: request.headers.get("User-Agent") || "Unknown",
      TIME: جاری_زمان.getTime(),
    };
    if (config_JSON.TG[گشا("5ZCv55So")]) {
      try {
        const TG_TXT = await env.KV.get("tg.json");
        const TG_JSON = JSON.parse(TG_TXT);
        if (TG_JSON?.BotToken && TG_JSON?.ChatID) {
          const درخواست_زمان = new Date(گزارش_محتوا.TIME).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
          const درخواست_نشانی = new URL(گزارش_محتوا.URL);
          const msg =
            `<b>#${config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUBNAME}${گشا("IOaXpeW/l+mAmuefpTwvYj4KCg==")}` +
            `${گشا("8J+TjCA8Yj7nsbvlnovvvJo8L2I+Iw==")}${گزارش_محتوا.TYPE}\n` +
            `🌐 <b>IP：</b><code>${گزارش_محتوا.IP}</code>\n` +
            `${گشا("8J+TjSA8Yj7kvY3nva7vvJo8L2I+")}${گزارش_محتوا.CC}\n` +
            `🏢 <b>ASN：</b>${گزارش_محتوا.ASN}\n` +
            `${گشا("8J+UlyA8Yj7ln5/lkI3vvJo8L2I+PGNvZGU+")}${درخواست_نشانی.host}</code>\n` +
            `${گشا("8J+UjSA8Yj7ot6/lvoTvvJo8L2I+PGNvZGU+")}${درخواست_نشانی.pathname + درخواست_نشانی.search}</code>\n` +
            `🤖 <b>UA：</b><code>${گزارش_محتوا.UA}</code>\n` +
            `${گشا("8J+ThSA8Yj7ml7bpl7TvvJo8L2I+")}${درخواست_زمان}\n` +
            `${config_JSON.CF.Usage.success ? `${گشا("8J+TiiA8Yj7or7fmsYLnlKjph4/vvJo8L2I+")}${config_JSON.CF.Usage.total}/${config_JSON.CF.Usage.max} <b>${((config_JSON.CF.Usage.total / config_JSON.CF.Usage.max) * 100).toFixed(2)}%</b>\n` : ""}`;
          await fetch(
            `https://api.telegram.org/bot${TG_JSON.BotToken}/sendMessage?chat_id=${TG_JSON.ChatID}&parse_mode=HTML&text=${encodeURIComponent(msg)}`,
            {
              method: "GET",
              headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;",
                "Accept-Encoding": "gzip, deflate, br",
                "User-Agent": گزارش_محتوا.UA || "Unknown",
              },
            },
          );
        }
      } catch (error) {
        console.error(`${گشا("6K+75Y+WdGcuanNvbuWHuumUmTog")}${error.message}`);
      }
    }
    آیا_نوشتن_مخزن_گزارش = ["1", "true"].includes(env.OFF_LOG) ? false : آیا_نوشتن_مخزن_گزارش;
    if (!آیا_نوشتن_مخزن_گزارش) return;
    let گزارش_آرایه = [];
    const موجود_گزارش = await env.KV.get("log.json"),
      مخزن_ظرفیت_محدودیت = 4; //
    if (موجود_گزارش) {
      try {
        گزارش_آرایه = JSON.parse(موجود_گزارش);
        if (!Array.isArray(گزارش_آرایه)) {
          گزارش_آرایه = [گزارش_محتوا];
        } else if (درخواست_نوع !== "Get_SUB") {
          const سی_دقیقه_پیش_برچسب_زمانی = جاری_زمان.getTime() - 30 * 60 * 1000;
          if (
            گزارش_آرایه.some(
              (log) =>
                log.TYPE !== "Get_SUB" &&
                log.IP === دسترسی_آی_پی &&
                log.URL === request.url &&
                log.UA === (request.headers.get("User-Agent") || "Unknown") &&
                log.TIME >= سی_دقیقه_پیش_برچسب_زمانی,
            )
          )
            return;
          گزارش_آرایه.push(گزارش_محتوا);
          while (
            JSON.stringify(گزارش_آرایه, null, 2).length > مخزن_ظرفیت_محدودیت * 1024 * 1024 &&
            گزارش_آرایه.length > 0
          )
            گزارش_آرایه.shift();
        } else {
          گزارش_آرایه.push(گزارش_محتوا);
          while (
            JSON.stringify(گزارش_آرایه, null, 2).length > مخزن_ظرفیت_محدودیت * 1024 * 1024 &&
            گزارش_آرایه.length > 0
          )
            گزارش_آرایه.shift();
        }
      } catch (e) {
        گزارش_آرایه = [گزارش_محتوا];
      }
    } else {
      گزارش_آرایه = [گزارش_محتوا];
    }
    await env.KV.put("log.json", JSON.stringify(گزارش_آرایه, null, 2));
  } catch (error) {
    console.error(`${گشا("5pel5b+X6K6w5b2V5aSx6LSlOiA=")}${error.message}`);
  }
}

function پوشاندن_حساس_اطلاعات(متن, پیشوند_طول = 3, پسوند_طول = 2) {
  if (!متن || typeof متن !== "string") return متن;
  if (متن.length <= پیشوند_طول + پسوند_طول) return متن; //

  const پیشوند = متن.slice(0, پیشوند_طول);
  const پسوند = متن.slice(-پسوند_طول);
  const ستاره_تعداد = متن.length - پیشوند_طول - پسوند_طول;

  return `${پیشوند}${"*".repeat(ستاره_تعداد)}${پسوند}`;
}

async function MD5MD5(متن) {
  const کدگذار = new TextEncoder();

  const نخستین_درهم = await crypto.subtle.digest("MD5", کدگذار.encode(متن));
  const نخستین_درهم_آرایه = Array.from(new Uint8Array(نخستین_درهم));
  const نخستین_هگز = نخستین_درهم_آرایه.map((بایت) => بایت.toString(16).padStart(2, "0")).join("");

  const دومین_درهم = await crypto.subtle.digest("MD5", کدگذار.encode(نخستین_هگز.slice(7, 27)));
  const دومین_درهم_آرایه = Array.from(new Uint8Array(دومین_درهم));
  const دومین_هگز = دومین_درهم_آرایه.map((بایت) => بایت.toString(16).padStart(2, "0")).join("");

  return دومین_هگز.toLowerCase();
}

function تصادفی_مسیر(کامل_گره_مسیر = "/") {
  const رایج_مسیر_پوشه = [
    "about",
    "account",
    "acg",
    "act",
    "activity",
    "ad",
    "ads",
    "ajax",
    "album",
    "albums",
    "anime",
    "api",
    "app",
    "apps",
    "archive",
    "archives",
    "article",
    "articles",
    "ask",
    "auth",
    "avatar",
    "bbs",
    "bd",
    "blog",
    "blogs",
    "book",
    "books",
    "bt",
    "buy",
    "cart",
    "category",
    "categories",
    "cb",
    "channel",
    "channels",
    "chat",
    "china",
    "city",
    "class",
    "classify",
    "clip",
    "clips",
    "club",
    "cn",
    "code",
    "collect",
    "collection",
    "comic",
    "comics",
    "community",
    "company",
    "config",
    "contact",
    "content",
    "course",
    "courses",
    "cp",
    "data",
    "detail",
    "details",
    "dh",
    "directory",
    "discount",
    "discuss",
    "dl",
    "dload",
    "doc",
    "docs",
    "document",
    "documents",
    "doujin",
    "download",
    "downloads",
    "drama",
    "edu",
    "en",
    "ep",
    "episode",
    "episodes",
    "event",
    "events",
    "f",
    "faq",
    "favorite",
    "favourites",
    "favs",
    "feedback",
    "file",
    "files",
    "film",
    "films",
    "forum",
    "forums",
    "friend",
    "friends",
    "game",
    "games",
    "gif",
    "go",
    "go.html",
    "go.php",
    "group",
    "groups",
    "help",
    "home",
    "hot",
    "htm",
    "html",
    "image",
    "images",
    "img",
    "index",
    "info",
    "intro",
    "item",
    "items",
    "ja",
    "jp",
    "jump",
    "jump.html",
    "jump.php",
    "jumping",
    "knowledge",
    "lang",
    "lesson",
    "lessons",
    "lib",
    "library",
    "link",
    "links",
    "list",
    "live",
    "lives",
    "m",
    "mag",
    "magnet",
    "mall",
    "manhua",
    "map",
    "member",
    "members",
    "message",
    "messages",
    "mobile",
    "movie",
    "movies",
    "music",
    "my",
    "new",
    "news",
    "note",
    "novel",
    "novels",
    "online",
    "order",
    "out",
    "out.html",
    "out.php",
    "outbound",
    "p",
    "page",
    "pages",
    "pay",
    "payment",
    "pdf",
    "photo",
    "photos",
    "pic",
    "pics",
    "picture",
    "pictures",
    "play",
    "player",
    "playlist",
    "post",
    "posts",
    "product",
    "products",
    "program",
    "programs",
    "project",
    "qa",
    "question",
    "rank",
    "ranking",
    "read",
    "readme",
    "redirect",
    "redirect.html",
    "redirect.php",
    "reg",
    "register",
    "res",
    "resource",
    "retrieve",
    "sale",
    "search",
    "season",
    "seasons",
    "section",
    "seller",
    "series",
    "service",
    "services",
    "setting",
    "settings",
    "share",
    "shop",
    "show",
    "shows",
    "site",
    "soft",
    "sort",
    "source",
    "special",
    "star",
    "stars",
    "static",
    "stock",
    "store",
    "stream",
    "streaming",
    "streams",
    "student",
    "study",
    "tag",
    "tags",
    "task",
    "teacher",
    "team",
    "tech",
    "temp",
    "test",
    "thread",
    "tool",
    "tools",
    "topic",
    "topics",
    "torrent",
    "trade",
    "travel",
    "tv",
    "txt",
    "type",
    "u",
    "upload",
    "uploads",
    "url",
    "urls",
    "user",
    "users",
    "v",
    "version",
    "videos",
    "view",
    "vip",
    "vod",
    "watch",
    "web",
    "wenku",
    "wiki",
    "work",
    "www",
    "zh",
    "zh-cn",
    "zh-tw",
    "zip",
  ];
  const تصادفی_داده = Math.floor(Math.random() * 3 + 1);
  const تصادفی_مسیر = رایج_مسیر_پوشه
    .sort(() => 0.5 - Math.random())
    .slice(0, تصادفی_داده)
    .join("/");
  if (کامل_گره_مسیر === "/") return `/${تصادفی_مسیر}`;
  else return `/${تصادفی_مسیر + کامل_گره_مسیر.replace("/?", "?")}`;
}

function جایگزینی_ستاره_است_تصادفی_نویسه(محتوا) {
  if (typeof محتوا !== "string" || !محتوا.includes("*")) return محتوا;
  const مجموعه_نویسه = "abcdefghijklmnopqrstuvwxyz0123456789";
  return محتوا.replace(/\*/g, () => {
    let s = "";
    for (let i = 0; i < Math.floor(Math.random() * 14) + 3; i++)
      s += مجموعه_نویسه[Math.floor(Math.random() * مجموعه_نویسه.length)];
    return s;
  });
}

const دی_ان_اس_امن_انبار = {};
const دی_ان_اس_امن_انبار_حداکثر_آیتم = 256;
const دی_ان_اس_امن_رکورد_نوع_نگاشت = { A: 1, NS: 2, CNAME: 5, MX: 15, TXT: 16, AAAA: 28, SRV: 33, HTTPS: 65 };
async function دی_ان_اس_امن_پرس_وجو(
  دامنه,
  رکورد_نوع,
  دی_ان_اس_امن_تحلیل_سرویس = "https://cloudflare-dns.com/dns-query",
) {
  const نرمال_سازی_دامنه = String(دامنه || "")
    .trim()
    .toLowerCase()
    .replace(/\.$/, "");
  const نرمال_سازی_رکورد_نوع = String(رکورد_نوع || "")
    .trim()
    .toUpperCase();
  const انبار_کلید = `${نرمال_سازی_دامنه}:${نرمال_سازی_رکورد_نوع}`;
  const qtype = دی_ان_اس_امن_رکورد_نوع_نگاشت[نرمال_سازی_رکورد_نوع] || 1;
  const جاری_برچسب_زمانی = Date.now();
  const اکنون_انبار_مورد = دی_ان_اس_امن_انبار[انبار_کلید];
  if (اکنون_انبار_مورد && جاری_برچسب_زمانی < اکنون_انبار_مورد[گشا("6L+H5pyf5pe26Ze0")]) {
    log(`${گشا("W0RvSOafpeivol0g5ZG95Lit57yT5a2YIA==")}${دامنه} ${رکورد_نوع} via ${دی_ان_اس_امن_تحلیل_سرویس}`);
    return اکنون_انبار_مورد.data.map((data) => ({ type: qtype, data }));
  }
  const باز_شروع_زمان = performance.now();
  log(`${گشا("W0RvSOafpeivol0g5byA5aeL5p+l6K+iIA==")}${دامنه} ${رکورد_نوع} via ${دی_ان_اس_امن_تحلیل_سرویس}`);
  try {
    //
    //
    const کدگذاری_دامنه = (name) => {
      const parts = name.endsWith(".") ? name.slice(0, -1).split(".") : name.split(".");
      const bufs = [];
      for (const label of parts) {
        const enc = new TextEncoder().encode(label);
        bufs.push(new Uint8Array([enc.length]), enc);
      }
      bufs.push(new Uint8Array([0]));
      const total = bufs.reduce((s, b) => s + b.length, 0);
      const result = new Uint8Array(total);
      let off = 0;
      for (const b of bufs) {
        result.set(b, off);
        off += b.length;
      }
      return result;
    };

    //
    const qname = کدگذاری_دامنه(نرمال_سازی_دامنه);
    const query = new Uint8Array(12 + qname.length + 4);
    const qview = new DataView(query.buffer);
    qview.setUint16(0, crypto.getRandomValues(new Uint16Array(1))[0]); //
    qview.setUint16(2, 0x0100); //
    qview.setUint16(4, 1); //
    query.set(qname, 12);
    qview.setUint16(12 + qname.length, qtype);
    qview.setUint16(12 + qname.length + 2, 1); //

    //
    log(
      `${گشا("W0RvSOafpeivol0g5Y+R6YCB5p+l6K+i5oql5paHIA==")}${دامنه} via ${دی_ان_اس_امن_تحلیل_سرویس} (type=${qtype}, ${query.length}${گشا("5a2X6IqCKQ==")}`,
    );
    const response = await fetch(دی_ان_اس_امن_تحلیل_سرویس, {
      method: "POST",
      headers: {
        "Content-Type": "application/dns-message",
        Accept: "application/dns-message",
      },
      body: query,
    });
    if (!response.ok) {
      console.warn(
        `${گشا("W0RvSOafpeivol0g6K+35rGC5aSx6LSlIA==")}${دامنه} ${رکورد_نوع} via ${دی_ان_اس_امن_تحلیل_سرویس}${گشا("IOWTjeW6lOS7o+eggTo=")}${response.status}`,
      );
      return [];
    }

    //
    const buf = new Uint8Array(await response.arrayBuffer());
    const dv = new DataView(buf.buffer);
    const qdcount = dv.getUint16(4);
    const ancount = dv.getUint16(6);
    log(
      `${گشا("W0RvSOafpeivol0g5pS25Yiw5ZON5bqUIA==")}${دامنه} ${رکورد_نوع} via ${دی_ان_اس_امن_تحلیل_سرویس} (${buf.length}${گشا("5a2X6IqCLCA=")}${ancount}${گشا("5p2h5bqU562UKQ==")}`,
    );

    //
    const تحلیل_دامنه = (pos) => {
      const labels = [];
      let p = pos,
        jumped = false,
        endPos = -1,
        safe = 128;
      while (p < buf.length && safe-- > 0) {
        const len = buf[p];
        if (len === 0) {
          if (!jumped) endPos = p + 1;
          break;
        }
        if ((len & 0xc0) === 0xc0) {
          if (!jumped) endPos = p + 2;
          p = ((len & 0x3f) << 8) | buf[p + 1];
          jumped = true;
          continue;
        }
        labels.push(new TextDecoder().decode(buf.slice(p + 1, p + 1 + len)));
        p += len + 1;
      }
      if (endPos === -1) endPos = p + 1;
      return [labels.join("."), endPos];
    };

    //
    let offset = 12;
    for (let i = 0; i < qdcount; i++) {
      const [, end] = تحلیل_دامنه(offset);
      offset = /**/ end + 4; //
    }

    //
    const answers = [];
    for (let i = 0; i < ancount && offset < buf.length; i++) {
      const [name, nameEnd] = تحلیل_دامنه(offset);
      offset = /**/ nameEnd;
      const type = dv.getUint16(offset);
      offset += 2;
      offset += 2; //
      const ttl = dv.getUint32(offset);
      offset += 4;
      const rdlen = dv.getUint16(offset);
      offset += 2;
      const rdata = buf.slice(offset, offset + rdlen);
      offset += rdlen;

      let data;
      if (type === 1 && rdlen === 4) {
        //
        data = `${rdata[0]}.${rdata[1]}.${rdata[2]}.${rdata[3]}`;
      } else if (type === 28 && rdlen === 16) {
        //
        const segs = [];
        for (let j = 0; j < 16; j += 2) segs.push(((rdata[j] << 8) | rdata[j + 1]).toString(16));
        data = segs.join(":");
      } else if (type === 16) {
        //
        let tOff = 0;
        const parts = [];
        while (tOff < rdlen) {
          const tLen = rdata[tOff++];
          parts.push(new TextDecoder().decode(rdata.slice(tOff, tOff + tLen)));
          tOff += tLen;
        }
        data = parts.join("");
      } else if (type === 5) {
        //
        const [cname] = تحلیل_دامنه(offset - rdlen);
        data = cname;
      } else {
        data = Array.from(rdata)
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      }
      answers.push({ name, type, TTL: ttl, data, rdata });
    }
    const مدت = (performance.now() - باز_شروع_زمان).toFixed(2);
    log(
      `${گشا("W0RvSOafpeivol0g5p+l6K+i5a6M5oiQIA==")}${دامنه} ${رکورد_نوع} via ${دی_ان_اس_امن_تحلیل_سرویس} ${مدت}${گشا("bXMg5YWx")}${answers.length}${گشا("5p2h57uT5p6c")}${answers.length > 0 ? "\n" + answers.map((a, i) => `  ${i + 1}. ${a.name} type=${a.type} TTL=${a.TTL} data=${a.data}`).join("\n") : ""}`,
    );
    //
    const مرتبط_رکورد = answers.filter((answer) => answer.type === qtype);
    const حداقل_TTL = مرتبط_رکورد.length > 0 ? Math.min(...مرتبط_رکورد.map((a) => a.TTL)) : 0;
    const انبار_TTL = Math.max(حداقل_TTL, 5 * 60);
    const انبار_انقضا_زمان = Date.now() + انبار_TTL * 1000;
    const انبار_داده = مرتبط_رکورد.map((answer) => answer.data);
    if (انبار_داده.length > 0 || answers.length === 0) {
      if (Object.keys(دی_ان_اس_امن_انبار).length >= دی_ان_اس_امن_انبار_حداکثر_آیتم) {
        const پاکسازی_برچسب_زمانی = Date.now();
        for (const [انبار_آیتم_کلید, انبار_آیتم] of Object.entries(دی_ان_اس_امن_انبار)) {
          if (پاکسازی_برچسب_زمانی >= انبار_آیتم[گشا("6L+H5pyf5pe26Ze0")]) delete دی_ان_اس_امن_انبار[انبار_آیتم_کلید];
        }
        if (Object.keys(دی_ان_اس_امن_انبار).length >= دی_ان_اس_امن_انبار_حداکثر_آیتم) {
          delete دی_ان_اس_امن_انبار[Object.keys(دی_ان_اس_امن_انبار)[0]];
        }
      }
      دی_ان_اس_امن_انبار[انبار_کلید] = { data: انبار_داده, [گشا("6L+H5pyf5pe26Ze0")]: انبار_انقضا_زمان };
      log(
        `${گشا("W0RvSOafpeivol0g5YaZ5YWl57yT5a2YIA==")}${دامنه} ${رکورد_نوع} TTL=${انبار_TTL}s${انبار_داده.length === 0 ? گشا("77yI56m657uT5p6c77yJ") : ""}`,
      );
    }
    return answers;
  } catch (error) {
    const مدت = (performance.now() - باز_شروع_زمان).toFixed(2);
    console.error(
      `${گشا("W0RvSOafpeivol0g5p+l6K+i5aSx6LSlIA==")}${دامنه} ${رکورد_نوع} via ${دی_ان_اس_امن_تحلیل_سرویس} ${مدت}ms:`,
      error,
    );
    return [];
  }
}

async function خواندن_config_JSON(env, hostname, userID, UA = "Mozilla/5.0", بازنشانی_پیکربندی = false) {
  const _p = کد_شناسه_فرهنگ[0];
  const host = hostname,
    Ali_DoH = "https://dns.alidns.com/dns-query",
    ECH_SNI = "cloudflare-ech.com",
    نگهدارنده = "{{IP:PORT}}",
    مقداردهی_باز_شروع_زمان = performance.now(),
    پیش_فرض_پیکربندی_جیسون = {
      TIME: new Date().toISOString(),
      HOST: host,
      HOSTS: [hostname],
      UUID: userID,
      PATH: "/",
      ALPN: "",
      [گشا("5Y2P6K6u57G75Z6L")]: "v" + "le" + گشا("c3M="),
      [گشا("5Lyg6L6T5Y2P6K6u")]: "ws",
      [گشا("Z1JQQ+aooeW8jw==")]: "gun",
      gRPCUserAgent: UA,
      [گشا("6Lez6L+H6K+B5Lmm6aqM6K+B")]: false,
      [گشا("5ZCv55SoMFJUVA==")]: false,
      [گشا("VExT5YiG54mH")]: null,
      [گشا("6ZqP5py66Lev5b6E")]: false,
      ECH: false,
      ECHConfig: {
        DNS: Ali_DoH,
        SNI: ECH_SNI,
      },
      [گشا("U1M=")]: {
        [گشا("5Yqg5a+G5pa55byP")]: "aes-128-gcm",
        TLS: true,
      },
      Fingerprint: "chrome",
      [گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")]: {
        local: true, //
        [گشا("5pys5ZywSVDlupM=")]: {
          [گشا("6ZqP5py6SVA=")]: true, //
          [گشا("6ZqP5py65pWw6YeP")]: 16,
          [گشا("5oyH5a6a56uv5Y+j")]: -1,
        },
        SUB: null,
        SUBNAME: "edge" + گشا("dHVubmVs"),
        SUBUpdateTime: 3, //
        TOKEN: await MD5MD5(hostname + userID),
      },
      [گشا("6K6i6ZiF6L2s5o2i6YWN572u")]: {
        SUBAPI: `https://SUBAPI.${کد_شناسه_فرهنگ[1]}ssss.net`,
        SUBCONFIG: `https://raw.githubusercontent.com/${کد_شناسه_فرهنگ[1]}${گشا("L0FDTDRTU1IvcmVmcy9oZWFkcy9tYWluL0NsYXNoL2NvbmZpZy9BQ0w0U1NSX09ubGluZV9NaW5pX011bHRpTW9kZV9DRi5pbmk=")}`,
        SUBEMOJI: false,
        SUBLIST: false, //
        UDP: false, //
        XUDP: false, //
        TLS13: false, //
        APPEND_TYPE: false, //
        SORT: false, //
        EXPAND: true, //
      },
      [گشا("5Y+N5Luj")]: {
        [_p]: "auto",
        [گشا("U09DS1M1")]: {
          [گشا("5ZCv55So")]: null,
          [گشا("5YWo5bGA")]: false,
          [گشا("6LSm5Y+3")]: "",
          [گشا("55m95ZCN5Y2V")]: فهرست_سفید_میانجی,
        },
        [گشا("6Lev5b6E5qih5p2/")]: {
          [_p]: گشا("cHJveHlpcD0=") + نگهدارنده,
          [گشا("U09DS1M1")]: {
            [گشا("5YWo5bGA")]: گشا("c29ja3M1Oi8v") + نگهدارنده,
            [گشا("5qCH5YeG")]: گشا("c29ja3M1PQ==") + نگهدارنده,
          },
          HTTP: {
            [گشا("5YWo5bGA")]: "http://" + نگهدارنده,
            [گشا("5qCH5YeG")]: "http=" + نگهدارنده,
          },
          HTTPS: {
            [گشا("5YWo5bGA")]: "https://" + نگهدارنده,
            [گشا("5qCH5YeG")]: "https=" + نگهدارنده,
          },
          [گشا("VFVSTg==")]: {
            [گشا("5YWo5bGA")]: گشا("dHVybjovLw==") + نگهدارنده,
            [گشا("5qCH5YeG")]: گشا("dHVybj0=") + نگهدارنده,
          },
          [گشا("U1NUUA==")]: {
            [گشا("5YWo5bGA")]: گشا("c3N0cDovLw==") + نگهدارنده,
            [گشا("5qCH5YeG")]: گشا("c3N0cD0=") + نگهدارنده,
          },
        },
      },
      TG: {
        [گشا("5ZCv55So")]: false,
        BotToken: null,
        ChatID: null,
      },
      CF: {
        Email: null,
        GlobalAPIKey: null,
        AccountID: null,
        APIToken: null,
        UsageAPI: null,
        Usage: {
          success: false,
          pages: 0,
          workers: 0,
          total: 0,
          max: 100000,
        },
      },
    };

  try {
    let configJSON = await env.KV.get("config.json");
    if (!configJSON || بازنشانی_پیکربندی == true) {
      await env.KV.put("config.json", JSON.stringify(پیش_فرض_پیکربندی_جیسون, null, 2));
      config_JSON = پیش_فرض_پیکربندی_جیسون;
    } else {
      config_JSON = JSON.parse(configJSON);
    }
  } catch (error) {
    console.error(`${گشا("6K+75Y+WY29uZmlnX0pTT07lh7rplJk6IA==")}${error.message}`);
    config_JSON = پیش_فرض_پیکربندی_جیسون;
  }

  if (!config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SUBLIST)
    config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SUBLIST = false;
  if (!config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].UDP) config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].UDP = false;
  if (!config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].XUDP) config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].XUDP = false;
  if (!config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].TLS13) config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].TLS13 = false;
  if (!config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].APPEND_TYPE)
    config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].APPEND_TYPE = false;
  if (!config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SORT) config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].SORT = false;
  if (typeof config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].EXPAND !== "boolean")
    config_JSON[گشا("6K6i6ZiF6L2s5o2i6YWN572u")].EXPAND = true;
  if (!config_JSON.gRPCUserAgent) config_JSON.gRPCUserAgent = UA;
  config_JSON.HOST = host;
  if (!config_JSON.HOSTS) config_JSON.HOSTS = [hostname];
  if (env.HOST)
    config_JSON.HOSTS = (await تبدیل_به_آرایه(env.HOST)).map(
      (h) =>
        h
          .toLowerCase()
          .replace(/^https?:\/\//, "")
          .split("/")[0]
          .split(":")[0],
    );
  config_JSON.UUID = userID;
  if (!config_JSON[گشا("6ZqP5py66Lev5b6E")]) config_JSON[گشا("6ZqP5py66Lev5b6E")] = false;
  if (!config_JSON[گشا("5ZCv55SoMFJUVA==")]) config_JSON[گشا("5ZCv55SoMFJUVA==")] = false;

  if (env.PATH) config_JSON.PATH = env.PATH.startsWith("/") ? env.PATH : "/" + env.PATH;
  else if (!config_JSON.PATH) config_JSON.PATH = "/";
  if (!config_JSON.ALPN) config_JSON.ALPN = "";

  if (!config_JSON[گشا("Z1JQQ+aooeW8jw==")]) config_JSON[گشا("Z1JQQ+aooeW8jw==")] = "gun";
  if (!config_JSON[گشا("U1M=")]) config_JSON[گشا("U1M=")] = { [گشا("5Yqg5a+G5pa55byP")]: "aes-128-gcm", TLS: false };

  if (!config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")]?.[_p]) {
    config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")] = {
      [_p]: گشا("cHJveHlpcD0=") + نگهدارنده,
      [گشا("U09DS1M1")]: {
        [گشا("5YWo5bGA")]: گشا("c29ja3M1Oi8v") + نگهدارنده,
        [گشا("5qCH5YeG")]: گشا("c29ja3M1PQ==") + نگهدارنده,
      },
      HTTP: {
        [گشا("5YWo5bGA")]: "http://" + نگهدارنده,
        [گشا("5qCH5YeG")]: "http=" + نگهدارنده,
      },
      HTTPS: {
        [گشا("5YWo5bGA")]: "https://" + نگهدارنده,
        [گشا("5qCH5YeG")]: "https=" + نگهدارنده,
      },
      [گشا("VFVSTg==")]: {
        [گشا("5YWo5bGA")]: گشا("dHVybjovLw==") + نگهدارنده,
        [گشا("5qCH5YeG")]: گشا("dHVybj0=") + نگهدارنده,
      },
      [گشا("U1NUUA==")]: {
        [گشا("5YWo5bGA")]: گشا("c3N0cDovLw==") + نگهدارنده,
        [گشا("5qCH5YeG")]: گشا("c3N0cD0=") + نگهدارنده,
      },
    };
  }
  if (!config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")].HTTPS)
    config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")].HTTPS = {
      [گشا("5YWo5bGA")]: "https://" + نگهدارنده,
      [گشا("5qCH5YeG")]: "https=" + نگهدارنده,
    };
  if (!config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")][گشا("VFVSTg==")])
    config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")][گشا("VFVSTg==")] = {
      [گشا("5YWo5bGA")]: گشا("dHVybjovLw==") + نگهدارنده,
      [گشا("5qCH5YeG")]: گشا("dHVybj0=") + نگهدارنده,
    };
  if (!config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")][گشا("U1NUUA==")])
    config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")][گشا("U1NUUA==")] = {
      [گشا("5YWo5bGA")]: گشا("c3N0cDovLw==") + نگهدارنده,
      [گشا("5qCH5YeG")]: گشا("c3N0cD0=") + نگهدارنده,
    };

  const میانجی_پیکربندی =
    config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")][
      config_JSON[گشا("5Y+N5Luj")][گشا("U09DS1M1")][گشا("5ZCv55So")]?.toUpperCase()
    ];

  let مسیر_میانجی_برگشتی_پارامتر = "";
  if (میانجی_پیکربندی && config_JSON[گشا("5Y+N5Luj")][گشا("U09DS1M1")][گشا("6LSm5Y+3")])
    مسیر_میانجی_برگشتی_پارامتر = (
      config_JSON[گشا("5Y+N5Luj")][گشا("U09DS1M1")][گشا("5YWo5bGA")]
        ? میانجی_پیکربندی[گشا("5YWo5bGA")]
        : میانجی_پیکربندی[گشا("5qCH5YeG")]
    ).replace(نگهدارنده, config_JSON[گشا("5Y+N5Luj")][گشا("U09DS1M1")][گشا("6LSm5Y+3")]);
  else if (config_JSON[گشا("5Y+N5Luj")][_p] !== "auto")
    مسیر_میانجی_برگشتی_پارامتر = config_JSON[گشا("5Y+N5Luj")][گشا("6Lev5b6E5qih5p2/")][_p].replace(
      نگهدارنده,
      config_JSON[گشا("5Y+N5Luj")][_p],
    );

  let میانجی_برگشتی_پرس_وجو_پارامتر = "";
  if (مسیر_میانجی_برگشتی_پارامتر.includes("?")) {
    const [میانجی_برگشتی_مسیر_بخش, میانجی_برگشتی_بخش_پرس_وجو] = مسیر_میانجی_برگشتی_پارامتر.split("?");
    مسیر_میانجی_برگشتی_پارامتر = میانجی_برگشتی_مسیر_بخش;
    میانجی_برگشتی_پرس_وجو_پارامتر = میانجی_برگشتی_بخش_پرس_وجو;
  }

  config_JSON.PATH = config_JSON.PATH.replace(مسیر_میانجی_برگشتی_پارامتر, "").replace("//", "/");
  const normalizedPath =
    config_JSON.PATH === "/" ? "" : config_JSON.PATH.replace(/\/+(?=\?|$)/, "").replace(/\/+$/, "");
  const [مسیر_بخش, ...پرس_وجو_آرایه] = normalizedPath.split("?");
  const بخش_پرس_وجو = پرس_وجو_آرایه.length ? "?" + پرس_وجو_آرایه.join("?") : "";
  const نهایی_بخش_پرس_وجو = میانجی_برگشتی_پرس_وجو_پارامتر
    ? بخش_پرس_وجو
      ? بخش_پرس_وجو + "&" + میانجی_برگشتی_پرس_وجو_پارامتر
      : "?" + میانجی_برگشتی_پرس_وجو_پارامتر
    : بخش_پرس_وجو;
  config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")] =
    (مسیر_بخش || "/") +
    (مسیر_بخش && مسیر_میانجی_برگشتی_پارامتر ? "/" : "") +
    مسیر_میانجی_برگشتی_پارامتر +
    نهایی_بخش_پرس_وجو +
    (config_JSON[گشا("5ZCv55SoMFJUVA==")] ? (نهایی_بخش_پرس_وجو ? "&" : "?") + "ed=2560" : "");

  if (!config_JSON[گشا("VExT5YiG54mH")] && config_JSON[گشا("VExT5YiG54mH")] !== null)
    config_JSON[گشا("VExT5YiG54mH")] = null;
  const لایه_امن_قطعه_پارامتر =
    config_JSON[گشا("VExT5YiG54mH")] == "Shadowrocket"
      ? `&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}`
      : config_JSON[گشا("VExT5YiG54mH")] == "Happ"
        ? `&fragment=${encodeURIComponent("3,1,tlshello")}`
        : "";
  if (!config_JSON.Fingerprint) config_JSON.Fingerprint = "chrome";
  if (!config_JSON.ECH) config_JSON.ECH = false;
  if (!config_JSON.ECHConfig) config_JSON.ECHConfig = { DNS: Ali_DoH, SNI: ECH_SNI };
  const پیوند_پنهان_پارامتر = config_JSON.ECH
    ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + "+" : "") + config_JSON.ECHConfig.DNS)}`
    : "";
  const {
    type: انتقال_پروتکل,
    [گشا("6Lev5b6E5a2X5q615ZCN")]: مسیر_نام_فیلد,
    [گشا("5Z+f5ZCN5a2X5q615ZCN")]: دامنه_نام_فیلد,
  } = گرفتن_انتقال_پروتکل_پیکربندی(config_JSON);
  const انتقال_مسیر_پارامتر_مقدار = گرفتن_انتقال_مسیر_پارامتر_مقدار(
    config_JSON,
    config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")],
  );
  config_JSON.LINK =
    config_JSON[گشا("5Y2P6K6u57G75Z6L")] === گشا("c3M=")
      ? `${config_JSON[گشا("5Y2P6K6u57G75Z6L")]}://${btoa(config_JSON[گشا("U1M=")][گشا("5Yqg5a+G5pa55byP")] + ":" + userID)}@${host}:${config_JSON[گشا("U1M=")].TLS ? "443" : "80"}?plugin=v2${encodeURIComponent(`ray-plugin;mode=websocket;host=${host};path=${(config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")].includes("?") ? config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")].replace("?", "?enc=" + config_JSON[گشا("U1M=")][گشا("5Yqg5a+G5pa55byP")] + "&") : config_JSON[گشا("5a6M5pW06IqC54K56Lev5b6E")] + "?enc=" + config_JSON[گشا("U1M=")][گشا("5Yqg5a+G5pa55byP")]) + (config_JSON[گشا("U1M=")].TLS ? ";tls" : "")};mux=0`) + پیوند_پنهان_پارامتر}#${encodeURIComponent(config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUBNAME)}`
      : `${config_JSON[گشا("5Y2P6K6u57G75Z6L")]}://${userID}@${host}:443?security=tls&type=${انتقال_پروتکل + پیوند_پنهان_پارامتر}&${دامنه_نام_فیلد}=${host}&fp=${config_JSON.Fingerprint}&sni=${host}&${مسیر_نام_فیلد}=${encodeURIComponent(انتقال_مسیر_پارامتر_مقدار) + لایه_امن_قطعه_پارامتر}&encryption=none#${encodeURIComponent(config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].SUBNAME)}`;
  config_JSON[گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ")].TOKEN = await MD5MD5(hostname + userID);

  const مقداردهی_پیام_رسان_JSON = { BotToken: null, ChatID: null };
  config_JSON.TG = {
    [گشا("5ZCv55So")]: config_JSON.TG[گشا("5ZCv55So")] ? config_JSON.TG[گشا("5ZCv55So")] : false,
    ...مقداردهی_پیام_رسان_JSON,
  };
  try {
    const TG_TXT = await env.KV.get("tg.json");
    if (!TG_TXT) {
      await env.KV.put("tg.json", JSON.stringify(مقداردهی_پیام_رسان_JSON, null, 2));
    } else {
      const TG_JSON = JSON.parse(TG_TXT);
      config_JSON.TG.ChatID = TG_JSON.ChatID ? TG_JSON.ChatID : null;
      config_JSON.TG.BotToken = TG_JSON.BotToken ? پوشاندن_حساس_اطلاعات(TG_JSON.BotToken) : null;
    }
  } catch (error) {
    console.error(`${گشا("6K+75Y+WdGcuanNvbuWHuumUmTog")}${error.message}`);
  }

  const مقداردهی_ابر_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
  config_JSON.CF = { ...مقداردهی_ابر_JSON, Usage: { success: false, pages: 0, workers: 0, total: 0, max: 100000 } };
  try {
    const CF_TXT = await env.KV.get("cf.json");
    if (!CF_TXT) {
      await env.KV.put("cf.json", JSON.stringify(مقداردهی_ابر_JSON, null, 2));
    } else {
      const CF_JSON = JSON.parse(CF_TXT);
      if (CF_JSON.UsageAPI) {
        try {
          const response = await fetch(CF_JSON.UsageAPI);
          const Usage = await response.json();
          config_JSON.CF.Usage = Usage;
        } catch (err) {
          console.error(`${گشا("6K+35rGCIENGX0pTT04uVXNhZ2VBUEkg5aSx6LSlOiA=")}${err.message}`);
        }
      } else {
        config_JSON.CF.Email = CF_JSON.Email ? CF_JSON.Email : null;
        config_JSON.CF.GlobalAPIKey = CF_JSON.GlobalAPIKey ? پوشاندن_حساس_اطلاعات(CF_JSON.GlobalAPIKey) : null;
        config_JSON.CF.AccountID = CF_JSON.AccountID ? پوشاندن_حساس_اطلاعات(CF_JSON.AccountID) : null;
        config_JSON.CF.APIToken = CF_JSON.APIToken ? پوشاندن_حساس_اطلاعات(CF_JSON.APIToken) : null;
        config_JSON.CF.UsageAPI = null;
        const Usage = await getCloudflareUsage(
          CF_JSON.Email,
          CF_JSON.GlobalAPIKey,
          CF_JSON.AccountID,
          CF_JSON.APIToken,
        );
        config_JSON.CF.Usage = Usage;
      }
    }
  } catch (error) {
    console.error(`${گشا("6K+75Y+WY2YuanNvbuWHuumUmTog")}${error.message}`);
  }

  config_JSON[گشا("5Yqg6L295pe26Ze0")] = (performance.now() - مقداردهی_باز_شروع_زمان).toFixed(2) + "ms";
  return config_JSON;
}

function شناسایی_اپراتور(request) {
  const cf = request?.cf;
  const شبکه_اپراتور_نگاشت = {
    4134: "ct",
    4809: "ct",
    4811: "ct",
    4812: "ct",
    4815: "ct",
    4837: "cu",
    4814: "cu",
    9929: "cu",
    17623: "cu",
    17816: "cu",
    9808: "cmcc",
    24400: "cmcc",
    56040: "cmcc",
    56041: "cmcc",
    56044: "cmcc",
  };
  const اپراتور_کلیدواژه_نگاشت = [
    { code: "ct", pattern: /chinanet|chinatelecom|china telecom|cn2|shtel/ },
    { code: "cmcc", pattern: /cmi|cmnet|chinamobile|china mobile|cmcc|mobile communications/ },
    { code: "cu", pattern: /china169|china unicom|chinaunicom|cucc|cncgroup|cuii|netcom/ },
  ];
  if (String(cf?.country || "").toLowerCase() !== "cn") return "cf";
  const سازمان_نام = String(cf?.asOrganization || "").toLowerCase();
  const تطبیق_اپراتور = اپراتور_کلیدواژه_نگاشت.find(({ pattern }) => pattern.test(سازمان_نام))?.code;
  return تطبیق_اپراتور || شبکه_اپراتور_نگاشت[String(cf?.asn || "")] || "cf";
}

async function تولید_تصادفی_آی_پی(request, count = 16, مشخص_درگاه = -1) {
  const url = new URL(request.url);
  const پرس_وجو_پارامتر_اپراتور = String(url.searchParams.get("cnIspCode") || "").toLowerCase();
  const اپراتور_پرونده_نشانه = ["ct", "cu", "cmcc", "cf"].includes(پرس_وجو_پارامتر_اپراتور)
    ? پرس_وجو_پارامتر_اپراتور
    : شناسایی_اپراتور(request);
  const اپراتور_نام_نگاشت = {
    cmcc: گشا("Q0bnp7vliqjkvJjpgIk="),
    cu: گشا("Q0bogZTpgJrkvJjpgIk="),
    ct: گشا("Q0bnlLXkv6HkvJjpgIk="),
    cf: گشا("Q0blrpjmlrnkvJjpgIk="),
  };
  const cidr_url =
    اپراتور_پرونده_نشانه === "cf"
      ? `https://raw.githubusercontent.com/${کد_شناسه_فرهنگ[1]}/${کد_شناسه_فرهنگ[1]}/main/CF-CIDR.txt`
      : `https://raw.githubusercontent.com/${کد_شناسه_فرهنگ[1]}/${کد_شناسه_فرهنگ[1]}/main/CF-CIDR/${اپراتور_پرونده_نشانه}.txt`;
  const cfname = اپراتور_نام_نگاشت[اپراتور_پرونده_نشانه] || گشا("Q0blrpjmlrnkvJjpgIk=");
  const cfport = [443, 2053, 2083, 2087, 2096, 8443];
  let cidrList = [];
  try {
    const res = await fetch(cidr_url);
    cidrList = res.ok ? await تبدیل_به_آرایه(await res.text()) : ["104.16.0.0/13"];
  } catch {
    cidrList = ["104.16.0.0/13"];
  }

  const generateRandomIPFromCIDR = (cidr) => {
    const [baseIP, prefixLength] = cidr.split("/"),
      prefix = parseInt(prefixLength),
      hostBits = 32 - prefix;
    const ipInt = baseIP.split(".").reduce((a, p, i) => a | (parseInt(p) << (24 - i * 8)), 0);
    const randomOffset = Math.floor(Math.random() * Math.pow(2, hostBits));
    const mask = (0xffffffff << hostBits) >>> 0,
      randomIP = (((ipInt & mask) >>> 0) + randomOffset) >>> 0;
    return [(randomIP >>> 24) & 0xff, (randomIP >>> 16) & 0xff, (randomIP >>> 8) & 0xff, randomIP & 0xff].join(".");
  };
  const randomIPs = Array.from({ length: count }, (_, index) => {
    const ip = generateRandomIPFromCIDR(cidrList[Math.floor(Math.random() * cidrList.length)]);
    const هدف_درگاه = مشخص_درگاه === -1 ? cfport[Math.floor(Math.random() * cfport.length)] : مشخص_درگاه;
    return `${ip}:${هدف_درگاه}#${cfname}${index + 1}`;
  });
  return [randomIPs, randomIPs.join("\n")];
}

async function تبدیل_به_آرایه(محتوا) {
  var جایگزینی_بعد_محتوا = محتوا.replace(/[	"'\r\n]+/g, ",").replace(/,+/g, ",");
  if (جایگزینی_بعد_محتوا.charAt(0) == ",") جایگزینی_بعد_محتوا = جایگزینی_بعد_محتوا.slice(1);
  if (جایگزینی_بعد_محتوا.charAt(جایگزینی_بعد_محتوا.length - 1) == ",")
    جایگزینی_بعد_محتوا = جایگزینی_بعد_محتوا.slice(0, جایگزینی_بعد_محتوا.length - 1);
  const نشانی_آرایه = جایگزینی_بعد_محتوا.split(",");
  return نشانی_آرایه;
}

async function گرفتن_برگزیده_اشتراک_سازنده_داده(برگزیده_اشتراک_سازنده_میزبان) {
  let برگزیده_آی_پی = [],
    دیگر_گره_پیوند = "",
    قالب_سازی_میزبان = برگزیده_اشتراک_سازنده_میزبان
      .replace(/^sub:\/\//i, "https://")
      .split("#")[0]
      .split("?")[0];
  if (!/^https?:\/\//i.test(قالب_سازی_میزبان)) قالب_سازی_میزبان = `https://${قالب_سازی_میزبان}`;

  try {
    const url = new URL(قالب_سازی_میزبان);
    قالب_سازی_میزبان = url.origin;
  } catch (error) {
    برگزیده_آی_پی.push(
      `127.0.0.1:1234#${برگزیده_اشتراک_سازنده_میزبان}${گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ5Zmo5qC85byP5YyW5byC5bi4Og==")}${error.message}`,
    );
    return [برگزیده_آی_پی, دیگر_گره_پیوند];
  }

  const برگزیده_اشتراک_سازنده_نشانی = `${قالب_سازی_میزبان}/sub?host=example.com&uuid=00000000-0000-4000-8000-000000000000`;

  try {
    const response = await fetch(برگزیده_اشتراک_سازنده_نشانی, {
      headers: { "User-Agent": تجمیع_اشتراک_UA },
    });

    if (!response.ok) {
      برگزیده_آی_پی.push(
        `127.0.0.1:1234#${برگزیده_اشتراک_سازنده_میزبان}${گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ5Zmo5byC5bi4Og==")}${response.statusText}`,
      );
      return [برگزیده_آی_پی, دیگر_گره_پیوند];
    }

    const برگزیده_اشتراک_سازنده_بازگشت_اشتراک_محتوا = atob(await response.text());
    const اشتراک_اجرا_فهرست = برگزیده_اشتراک_سازنده_بازگشت_اشتراک_محتوا.includes("\r\n")
      ? برگزیده_اشتراک_سازنده_بازگشت_اشتراک_محتوا.split("\r\n")
      : برگزیده_اشتراک_سازنده_بازگشت_اشتراک_محتوا.split("\n");

    for (const اجرا_محتوا of اشتراک_اجرا_فهرست) {
      if (!اجرا_محتوا.trim()) continue; //
      if (اجرا_محتوا.includes("00000000-0000-4000-8000-000000000000") && اجرا_محتوا.includes("example.com")) {
        //
        const نشانی_تطبیق = اجرا_محتوا.match(/:\/\/[^@]+@([^?]+)/);
        if (نشانی_تطبیق) {
          let نشانی_درگاه = نشانی_تطبیق[1],
            یادداشت = ""; //
          const یادداشت_تطبیق = اجرا_محتوا.match(/#(.+)$/);
          if (یادداشت_تطبیق) یادداشت = "#" + decodeURIComponent(یادداشت_تطبیق[1]);
          برگزیده_آی_پی.push(نشانی_درگاه + یادداشت);
        }
      } else {
        دیگر_گره_پیوند += اجرا_محتوا + "\n";
      }
    }
  } catch (error) {
    برگزیده_آی_پی.push(
      `127.0.0.1:1234#${برگزیده_اشتراک_سازنده_میزبان}${گشا("5LyY6YCJ6K6i6ZiF55Sf5oiQ5Zmo5byC5bi4Og==")}${error.message}`,
    );
  }

  return [برگزیده_آی_پی, دیگر_گره_پیوند];
}

async function درخواست_برگزیده_ای_پی_آی(urls, پیش_فرض_درگاه = "443", مهلت_زمان = 3000) {
  if (!urls?.length) return [[], [], [], []];
  const results = new Set(),
    میانجی_برگشتی_آی_پی_مخزن = new Set();
  let اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا = "",
    نیاز_اشتراک_تبدیل_اشتراک_نشانی_ها = [];
  await Promise.allSettled(
    urls.map(async (url) => {
      //
      const hashIndex = url.indexOf("#");
      const urlWithoutHash = hashIndex > -1 ? url.substring(0, hashIndex) : url;
      const ای_پی_آی_نام_یادداشت = hashIndex > -1 ? decodeURIComponent(url.substring(hashIndex + 1)) : null;
      const برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی = url.toLowerCase().includes(گشا("cHJveHlpcD10cnVl"));
      if (urlWithoutHash.toLowerCase().startsWith("sub://")) {
        try {
          const [برگزیده_آی_پی, دیگر_گره_پیوند] = await گرفتن_برگزیده_اشتراک_سازنده_داده(urlWithoutHash);
          //
          if (ای_پی_آی_نام_یادداشت) {
            for (const ip of برگزیده_آی_پی) {
              const پردازش_بعد_آی_پی = ip.includes("#")
                ? `${ip} [${ای_پی_آی_نام_یادداشت}]`
                : `${ip}#[${ای_پی_آی_نام_یادداشت}]`;
              results.add(پردازش_بعد_آی_پی);
              if (برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی) میانجی_برگشتی_آی_پی_مخزن.add(ip.split("#")[0]);
            }
          } else {
            for (const ip of برگزیده_آی_پی) {
              results.add(ip);
              if (برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی) میانجی_برگشتی_آی_پی_مخزن.add(ip.split("#")[0]);
            }
          }
          //
          if (دیگر_گره_پیوند && typeof دیگر_گره_پیوند === "string" && ای_پی_آی_نام_یادداشت) {
            const پردازش_بعد_پیوند_محتوا = دیگر_گره_پیوند.replace(
              /([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi,
              (match, link, lineEnd) => {
                const کامل_پیوند = link.includes("#")
                  ? `${link}${encodeURIComponent(` [${ای_پی_آی_نام_یادداشت}]`)}`
                  : `${link}${encodeURIComponent(`#[${ای_پی_آی_نام_یادداشت}]`)}`;
                return `${کامل_پیوند}${lineEnd}`;
              },
            );
            اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا += پردازش_بعد_پیوند_محتوا;
          } else if (دیگر_گره_پیوند && typeof دیگر_گره_پیوند === "string") {
            اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا += دیگر_گره_پیوند;
          }
        } catch (e) {}
        return;
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), مهلت_زمان);
        const response = await fetch(urlWithoutHash, {
          signal: controller.signal,
          headers: { "User-Agent": تجمیع_اشتراک_UA },
        });
        clearTimeout(timeoutId);
        let text = "";
        try {
          const buffer = await response.arrayBuffer();
          const contentType = (response.headers.get("content-type") || "").toLowerCase();
          const charset = contentType.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || "";

          //
          let decoders = ["utf-8", "gb2312"]; //
          if (charset.includes("gb") || charset.includes("gbk") || charset.includes("gb2312")) {
            decoders = ["gb2312", "utf-8"]; //
          }

          //
          let decodeSuccess = false;
          for (const decoder of decoders) {
            try {
              const decoded = new TextDecoder(decoder).decode(buffer);
              //
              if (decoded && decoded.length > 0 && !decoded.includes("\ufffd")) {
                text = decoded;
                decodeSuccess = true;
                break;
              } else if (decoded && decoded.length > 0) {
                //
                continue;
              }
            } catch (e) {
              //
              continue;
            }
          }

          //
          if (!decodeSuccess) {
            text = await response.text();
          }

          //
          if (!text || text.trim().length === 0) {
            return;
          }
        } catch (e) {
          console.error("Failed to decode response:", e);
          return;
        }

        //
        /**/

        let پیش_پردازش_اشتراک_متن_روشن_محتوا = text;
        const cleanText = typeof text === "string" ? text.replace(/\s/g, "") : "";
        if (cleanText.length > 0 && cleanText.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(cleanText)) {
          try {
            const bytes = new Uint8Array(
              atob(cleanText)
                .split("")
                .map((c) => c.charCodeAt(0)),
            );
            پیش_پردازش_اشتراک_متن_روشن_محتوا = new TextDecoder("utf-8").decode(bytes);
          } catch {}
        }
        if (پیش_پردازش_اشتراک_متن_روشن_محتوا.split("#")[0].includes("://")) {
          //
          if (ای_پی_آی_نام_یادداشت) {
            const پردازش_بعد_پیوند_محتوا = پیش_پردازش_اشتراک_متن_روشن_محتوا.replace(
              /([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi,
              (match, link, lineEnd) => {
                const کامل_پیوند = link.includes("#")
                  ? `${link}${encodeURIComponent(` [${ای_پی_آی_نام_یادداشت}]`)}`
                  : `${link}${encodeURIComponent(`#[${ای_پی_آی_نام_یادداشت}]`)}`;
                return `${کامل_پیوند}${lineEnd}`;
              },
            );
            اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا += پردازش_بعد_پیوند_محتوا + "\n";
          } else {
            اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا += پیش_پردازش_اشتراک_متن_روشن_محتوا + "\n";
          }
          return;
        }

        const lines = text
          .trim()
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l);
        const isCSV = lines.length > 1 && lines[0].includes(",");
        const IPV6_PATTERN = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
        const parsedUrl = new URL(urlWithoutHash);
        if (!isCSV) {
          lines.forEach((line) => {
            const lineHashIndex = line.indexOf("#");
            const [hostPart, remark] =
              lineHashIndex > -1 ? [line.substring(0, lineHashIndex), line.substring(lineHashIndex)] : [line, ""];
            let hasPort = false;
            if (hostPart.startsWith("[")) {
              hasPort = /\]:(\d+)$/.test(hostPart);
            } else {
              const colonIndex = hostPart.lastIndexOf(":");
              hasPort = colonIndex > -1 && /^\d+$/.test(hostPart.substring(colonIndex + 1));
            }
            const port = parsedUrl.searchParams.get("port") || پیش_فرض_درگاه;
            const ipItem = hasPort ? line : `${hostPart}:${port}${remark}`;
            //
            if (ای_پی_آی_نام_یادداشت) {
              const پردازش_بعد_آی_پی = ipItem.includes("#")
                ? `${ipItem} [${ای_پی_آی_نام_یادداشت}]`
                : `${ipItem}#[${ای_پی_آی_نام_یادداشت}]`;
              results.add(پردازش_بعد_آی_پی);
            } else {
              results.add(ipItem);
            }
            if (برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی) میانجی_برگشتی_آی_پی_مخزن.add(ipItem.split("#")[0]);
          });
        } else {
          const headers = lines[0].split(",").map((h) => h.trim());
          const dataLines = lines.slice(1);
          if (
            headers.includes(گشا("SVDlnLDlnYA=")) &&
            headers.includes(گشا("56uv5Y+j")) &&
            headers.includes(گشا("5pWw5o2u5Lit5b+D"))
          ) {
            const ipIdx = headers.indexOf(گشا("SVDlnLDlnYA=")),
              portIdx = headers.indexOf(گشا("56uv5Y+j"));
            const remarkIdx =
              headers.indexOf(گشا("5Zu95a62")) > -1
                ? headers.indexOf(گشا("5Zu95a62"))
                : headers.indexOf(گشا("5Z+O5biC")) > -1
                  ? headers.indexOf(گشا("5Z+O5biC"))
                  : headers.indexOf(گشا("5pWw5o2u5Lit5b+D"));
            const tlsIdx = headers.indexOf("TLS");
            dataLines.forEach((line) => {
              const cols = line.split(",").map((c) => c.trim());
              if (tlsIdx !== -1 && cols[tlsIdx]?.toLowerCase() !== "true") return;
              const wrappedIP = IPV6_PATTERN.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
              const ipItem = `${wrappedIP}:${cols[portIdx]}#${cols[remarkIdx]}`;
              //
              if (ای_پی_آی_نام_یادداشت) {
                const پردازش_بعد_آی_پی = `${ipItem} [${ای_پی_آی_نام_یادداشت}]`;
                results.add(پردازش_بعد_آی_پی);
              } else {
                results.add(ipItem);
              }
              if (برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی)
                میانجی_برگشتی_آی_پی_مخزن.add(`${wrappedIP}:${cols[portIdx]}`);
            });
          } else if (
            headers.some((h) => h.includes("IP")) &&
            headers.some((h) => h.includes(گشا("5bu26L+f"))) &&
            headers.some((h) => h.includes(گشا("5LiL6L296YCf5bqm")))
          ) {
            const ipIdx = headers.findIndex((h) => h.includes("IP"));
            const delayIdx = headers.findIndex((h) => h.includes(گشا("5bu26L+f")));
            const speedIdx = headers.findIndex((h) => h.includes(گشا("5LiL6L296YCf5bqm")));
            const port = parsedUrl.searchParams.get("port") || پیش_فرض_درگاه;
            dataLines.forEach((line) => {
              const cols = line.split(",").map((c) => c.trim());
              const wrappedIP = IPV6_PATTERN.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
              const ipItem = `${wrappedIP}:${port}${گشا("I0NG5LyY6YCJIA==")}${cols[delayIdx]}ms ${cols[speedIdx]}MB/s`;
              //
              if (ای_پی_آی_نام_یادداشت) {
                const پردازش_بعد_آی_پی = `${ipItem} [${ای_پی_آی_نام_یادداشت}]`;
                results.add(پردازش_بعد_آی_پی);
              } else {
                results.add(ipItem);
              }
              if (برگزیده_آی_پی_به_عنوان_میانجی_برگشتی_آی_پی) میانجی_برگشتی_آی_پی_مخزن.add(`${wrappedIP}:${port}`);
            });
          }
        }
      } catch (e) {}
    }),
  );
  //
  const پیوند_آرایه = اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا.trim()
    ? [...new Set(اشتراک_پیوند_پاسخ_متن_روشن_پیوند_محتوا.split(/\r?\n/).filter((line) => line.trim() !== ""))]
    : [];
  return [Array.from(results), پیوند_آرایه, نیاز_اشتراک_تبدیل_اشتراک_نشانی_ها, Array.from(میانجی_برگشتی_آی_پی_مخزن)];
}

async function میانجی_برگشتی_پارامتر_گرفتن(
  url,
  uuid,
  پیش_فرض_میانجی_برگشتی_آی_پی = "",
  پیش_فرض_میانجی_برگشتی_پشتیبان = true,
) {
  const { searchParams } = url;
  const pathname = decodeURIComponent(url.pathname);
  const pathLower = pathname.toLowerCase();
  let میانجی_برگشتی_آی_پی = پیش_فرض_میانجی_برگشتی_آی_پی,
    فعال_میانجی_میانجی_برگشتی = null,
    فعال_میانجی_سراسری_میانجی_برگشتی = false,
    من_حساب_میانجی = "",
    نشانی_میانجی_تحلیل_شده = {},
    فعال_میانجی_برگشتی_پشتیبان = پیش_فرض_میانجی_برگشتی_پشتیبان;
  const میانجی_برگشتی_بستر = {
    [گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")]: null,
    [گشا("5Y+N5LujSVA=")]: میانجی_برگشتی_آی_پی,
    [گشا("5Luj55CG57G75Z6L")]: null,
    [گشا("5Luj55CG6LSm5Y+3")]: "",
    [گشا("5Luj55CG5YWo5bGA")]: false,
    [گشا("5Luj55CG5Y+C5pWw")]: {},
    [گشا("5Y+N5Luj5YWc5bqV")]: فعال_میانجی_برگشتی_پشتیبان,
  };
  const ذخیره_عکس_لحظه = () => {
    میانجی_برگشتی_بستر[گشا("5Y+N5LujSVA=")] = میانجی_برگشتی_آی_پی;
    میانجی_برگشتی_بستر[گشا("5Luj55CG57G75Z6L")] = فعال_میانجی_میانجی_برگشتی;
    میانجی_برگشتی_بستر[گشا("5Luj55CG6LSm5Y+3")] = من_حساب_میانجی;
    میانجی_برگشتی_بستر[گشا("5Luj55CG5YWo5bGA")] = فعال_میانجی_سراسری_میانجی_برگشتی;
    میانجی_برگشتی_بستر[گشا("5Luj55CG5Y+C5pWw")] = { ...نشانی_میانجی_تحلیل_شده };
    میانجی_برگشتی_بستر[گشا("5Y+N5Luj5YWc5bqV")] = فعال_میانجی_برگشتی_پشتیبان;
  };

  const زنجیره_ای_میانجی_مسیر_تطبیق = pathname.match(/\/video\/(.+)$/i);
  if (زنجیره_ای_میانجی_مسیر_تطبیق) {
    try {
      const زنجیره_ای_میانجی_متن_روشن = base64SecretDecode(زنجیره_ای_میانجی_مسیر_تطبیق[1].replace(/\/+$/, ""), uuid);
      const { type, ...زنجیره_ای_میانجی_نشانی } = JSON.parse(زنجیره_ای_میانجی_متن_روشن);
      if (!type || !میانجی_برگشتی_پروتکل_پیش_فرض_درگاه[String(type).toLowerCase()])
        throw new Error(گشا("6ZO+5byP5Luj55CG57G75Z6L5peg5pWI"));
      if (!زنجیره_ای_میانجی_نشانی.hostname || !زنجیره_ای_میانجی_نشانی.port)
        throw new Error(گشا("6ZO+5byP5Luj55CG5Zyw5Z2A57y65bCRIGhvc3RuYW1lIOaIliBwb3J0"));
      من_حساب_میانجی = "";
      میانجی_برگشتی_آی_پی = گشا("6ZO+5byP5Luj55CG");
      فعال_میانجی_برگشتی_پشتیبان = false;
      فعال_میانجی_سراسری_میانجی_برگشتی = true;
      فعال_میانجی_میانجی_برگشتی = String(type).toLowerCase();
      نشانی_میانجی_تحلیل_شده = {
        username: زنجیره_ای_میانجی_نشانی.username,
        password: زنجیره_ای_میانجی_نشانی.password,
        hostname: زنجیره_ای_میانجی_نشانی.hostname,
        port: Number(زنجیره_ای_میانجی_نشانی.port),
      };
      if (isNaN(نشانی_میانجی_تحلیل_شده.port)) throw new Error(گشا("6ZO+5byP5Luj55CG56uv5Y+j5peg5pWI"));
      ذخیره_عکس_لحظه();
      return میانجی_برگشتی_بستر;
    } catch (err) {
      console.error(گشا("6Kej5p6Q6ZO+5byP5Luj55CG5Y+C5pWw5aSx6LSlOg=="), err.message);
    }
  }

  من_حساب_میانجی =
    searchParams.get(گشا("c29ja3M1")) ||
    searchParams.get("http") ||
    searchParams.get("https") ||
    searchParams.get(گشا("dHVybg==")) ||
    searchParams.get(گشا("c3N0cA==")) ||
    null;
  فعال_میانجی_سراسری_میانجی_برگشتی = searchParams.has(گشا("Z2xvYmFscHJveHk="));
  if (searchParams.get(گشا("c29ja3M1"))) فعال_میانجی_میانجی_برگشتی = گشا("c29ja3M1");
  else if (searchParams.get("http")) فعال_میانجی_میانجی_برگشتی = "http";
  else if (searchParams.get("https")) فعال_میانجی_میانجی_برگشتی = "https";
  else if (searchParams.get(گشا("dHVybg=="))) فعال_میانجی_میانجی_برگشتی = گشا("dHVybg==");
  else if (searchParams.get(گشا("c3N0cA=="))) فعال_میانجی_میانجی_برگشتی = گشا("c3N0cA==");

  const تحلیل_میانجی_نشانی = (مقدار, اجباری_سراسری = true) => {
    const تطبیق = new RegExp(گشا("Xihzb2NrczV8aHR0cHxodHRwc3x0dXJufHNzdHApOlwvXC8oLispJA=="), "i").exec(مقدار || "");
    if (!تطبیق) return false;
    فعال_میانجی_میانجی_برگشتی = تطبیق[1].toLowerCase();
    من_حساب_میانجی = تطبیق[2].split("/")[0];
    if (اجباری_سراسری) فعال_میانجی_سراسری_میانجی_برگشتی = true;
    return true;
  };

  const تنظیم_میانجی_برگشتی_آی_پی = (مقدار) => {
    میانجی_برگشتی_آی_پی = مقدار;
    فعال_میانجی_میانجی_برگشتی = null;
    فعال_میانجی_برگشتی_پشتیبان = false;
  };

  const استخراج_مسیر_مقدار = (مقدار) => {
    if (!مقدار.includes("://")) {
      const اسلش_نمایه = مقدار.indexOf("/");
      return اسلش_نمایه > 0 ? مقدار.slice(0, اسلش_نمایه) : مقدار;
    }
    const پروتکل_تفکیک = مقدار.split("://");
    if (پروتکل_تفکیک.length !== 2) return مقدار;
    const اسلش_نمایه = پروتکل_تفکیک[1].indexOf("/");
    return اسلش_نمایه > 0 ? `${پروتکل_تفکیک[0]}://${پروتکل_تفکیک[1].slice(0, اسلش_نمایه)}` : مقدار;
  };

  const پروتکل_دوم_مسیر_تطبیق = new RegExp(گشا("XC90cm9qYW49KFtePyNcc10rKQ=="), "i").exec(pathname);
  if (پروتکل_دوم_مسیر_تطبیق) {
    try {
      میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")] = تحلیل_پروتکل_دوم_میانجی_برگشتی_نشانی(
        پروتکل_دوم_مسیر_تطبیق[1].replace(/\/+$/, ""),
      );
    } catch (err) {
      console.error(گشا("6Kej5p6Q5pyo6ams5Y+N5Luj5Zyw5Z2A5aSx6LSlOg=="), err.message);
      میانجی_برگشتی_بستر[گشا("5pyo6ams5Y+N5Luj5Zyw5Z2A")] = null;
    }
  }

  const پرس_وجو_میانجی_برگشتی_آی_پی = searchParams.get(گشا("cHJveHlpcA=="));
  if (پرس_وجو_میانجی_برگشتی_آی_پی !== null) {
    if (!تحلیل_میانجی_نشانی(پرس_وجو_میانجی_برگشتی_آی_پی)) {
      تنظیم_میانجی_برگشتی_آی_پی(پرس_وجو_میانجی_برگشتی_آی_پی);
      ذخیره_عکس_لحظه();
      return میانجی_برگشتی_بستر;
    }
  } else {
    let تطبیق = new RegExp(گشا("XC8oc29ja3M1P3xodHRwfGh0dHBzfHR1cm58c3N0cCk6XC8/XC8/KFteLz8jXHNdKyk="), "i").exec(
      pathname,
    );
    if (تطبیق) {
      const نوع = تطبیق[1].toLowerCase();
      فعال_میانجی_میانجی_برگشتی = نوع === "sock" || نوع === گشا("c29ja3M=") ? گشا("c29ja3M1") : نوع;
      من_حساب_میانجی = تطبیق[2].split("/")[0];
      فعال_میانجی_سراسری_میانجی_برگشتی = true;
    } else if (
      (تطبیق = new RegExp(
        گشا("XC8oZz9zNXxzb2NrczV8Zz9odHRwfGc/aHR0cHN8Zz90dXJufGc/c3N0cCk9KFteLz8jXHNdKyk="),
        "i",
      ).exec(pathname))
    ) {
      const نوع = تطبیق[1].toLowerCase();
      من_حساب_میانجی = تطبیق[2].split("/")[0];
      فعال_میانجی_میانجی_برگشتی = نوع.includes(گشا("c3N0cA=="))
        ? گشا("c3N0cA==")
        : نوع.includes(گشا("dHVybg=="))
          ? گشا("dHVybg==")
          : نوع.includes("https")
            ? "https"
            : نوع.includes("http")
              ? "http"
              : گشا("c29ja3M1");
      if (نوع.startsWith("g")) فعال_میانجی_سراسری_میانجی_برگشتی = true;
    } else if ((تطبیق = new RegExp(گشا("XC8ocHJveHlpcFsuPV18cHlpcD18aXA9KShbXj8jXHNdKyk=")).exec(pathLower))) {
      const مسیر_میانجی_برگشتی_مقدار = استخراج_مسیر_مقدار(تطبیق[2]);
      if (!تحلیل_میانجی_نشانی(مسیر_میانجی_برگشتی_مقدار)) {
        تنظیم_میانجی_برگشتی_آی_پی(مسیر_میانجی_برگشتی_مقدار);
        ذخیره_عکس_لحظه();
        return میانجی_برگشتی_بستر;
      }
    }
  }

  if (!من_حساب_میانجی) {
    فعال_میانجی_میانجی_برگشتی = null;
    ذخیره_عکس_لحظه();
    return میانجی_برگشتی_بستر;
  }

  try {
    نشانی_میانجی_تحلیل_شده = await گرفتن_حساب_میانجی(
      من_حساب_میانجی,
      گرفتن_میانجی_پیش_فرض_درگاه(فعال_میانجی_میانجی_برگشتی),
    );
    if (searchParams.get(گشا("c29ja3M1"))) فعال_میانجی_میانجی_برگشتی = گشا("c29ja3M1");
    else if (searchParams.get("http")) فعال_میانجی_میانجی_برگشتی = "http";
    else if (searchParams.get("https")) فعال_میانجی_میانجی_برگشتی = "https";
    else if (searchParams.get(گشا("dHVybg=="))) فعال_میانجی_میانجی_برگشتی = گشا("dHVybg==");
    else if (searchParams.get(گشا("c3N0cA=="))) فعال_میانجی_میانجی_برگشتی = گشا("c3N0cA==");
    else فعال_میانجی_میانجی_برگشتی = فعال_میانجی_میانجی_برگشتی || گشا("c29ja3M1");
  } catch (err) {
    console.error(گشا("6Kej5p6QU09DS1M15Zyw5Z2A5aSx6LSlOg=="), err.message);
    فعال_میانجی_میانجی_برگشتی = null;
  }
  ذخیره_عکس_لحظه();
  return میانجی_برگشتی_بستر;
}

const میانجی_برگشتی_پروتکل_پیش_فرض_درگاه = {
  [گشا("c29ja3M1")]: 1080,
  http: 80,
  https: 443,
  [گشا("dHVybg==")]: 3478,
  [گشا("c3N0cA==")]: 443,
};
function گرفتن_میانجی_پیش_فرض_درگاه(نوع) {
  return میانجی_برگشتی_پروتکل_پیش_فرض_درگاه[String(نوع || "").toLowerCase()] || 80;
}

const حساب_میانجی_پایه۶۴_عبارت_منظم = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i,
  آی_پی۶_براکت_عبارت_منظم = /^\[.*\]$/;
function گرفتن_حساب_میانجی(address, پیش_فرض_درگاه = 80) {
  address = String(address || "")
    .trim()
    .replace(new RegExp(گشا("Xihzb2NrczV8aHR0cHxodHRwc3x0dXJufHNzdHApOlwvXC8="), "i"), "")
    .split("#")[0]
    .trim();
  const firstAt = address.lastIndexOf("@");
  if (firstAt !== -1) {
    let auth = address.slice(0, firstAt).replaceAll("%3D", "=");
    if (!auth.includes(":") && حساب_میانجی_پایه۶۴_عبارت_منظم.test(auth)) auth = atob(auth);
    address = `${auth}@${address.slice(firstAt + 1)}`;
  }

  const atIndex = address.lastIndexOf("@");
  const hostPart = (atIndex === -1 ? address : address.slice(atIndex + 1)).split("/")[0];
  const authPart = atIndex === -1 ? "" : address.slice(0, atIndex);
  const [username, password] = authPart ? authPart.split(":") : [];
  if (authPart && !password)
    throw new Error(
      گشا(
        "5peg5pWI55qEIFNPQ0tTIOWcsOWdgOagvOW8j++8muiupOivgemDqOWIhuW/hemhu+aYryAidXNlcm5hbWU6cGFzc3dvcmQiIOeahOW9ouW8jw==",
      ),
    );

  let hostname = hostPart,
    port = پیش_فرض_درگاه;
  if (hostPart.includes("]:")) {
    const [ipv6Host, ipv6Port = ""] = hostPart.split("]:");
    hostname = ipv6Host + "]";
    port = Number(ipv6Port.replace(/[^\d]/g, ""));
  } else if (!hostPart.startsWith("[")) {
    const parts = hostPart.split(":");
    if (parts.length === 2) {
      hostname = parts[0];
      port = Number(parts[1].replace(/[^\d]/g, ""));
    }
  }

  if (isNaN(port)) throw new Error(گشا("5peg5pWI55qEIFNPQ0tTIOWcsOWdgOagvOW8j++8muerr+WPo+WPt+W/hemhu+aYr+aVsOWtlw=="));
  if (hostname.includes(":") && !آی_پی۶_براکت_عبارت_منظم.test(hostname))
    throw new Error(
      گشا(
        "5peg5pWI55qEIFNPQ0tTIOWcsOWdgOagvOW8j++8mklQdjYg5Zyw5Z2A5b+F6aG755So5pa55ous5Y+35ous6LW35p2l77yM5aaCIFsyMDAxOmRiODo6MV0=",
      ),
    );
  return { username, password, hostname, port };
}

async function getCloudflareUsage(Email, GlobalAPIKey, AccountID, APIToken) {
  const API = "https://api.cloudflare.com/client/v4";
  const sum = (a) => a?.reduce((t, i) => t + (i?.sum?.requests || 0), 0) || 0;
  const cfg = { "Content-Type": "application/json" };

  try {
    if (!AccountID && (!Email || !GlobalAPIKey)) return { success: false, pages: 0, workers: 0, total: 0, max: 100000 };

    if (!AccountID) {
      const r = await fetch(`${API}/accounts`, {
        method: "GET",
        headers: { ...cfg, "X-AUTH-EMAIL": Email, "X-AUTH-KEY": GlobalAPIKey },
      });
      if (!r.ok) throw new Error(`${گشا("6LSm5oi36I635Y+W5aSx6LSlOiA=")}${r.status}`);
      const d = await r.json();
      if (!d?.result?.length) throw new Error(گشا("5pyq5om+5Yiw6LSm5oi3"));
      const idx = d.result.findIndex((a) => a.name?.toLowerCase().startsWith(Email.toLowerCase()));
      AccountID = d.result[idx >= 0 ? idx : 0]?.id;
    }

    const now = new Date();
    now.setUTCHours(0, 0, 0, 0);
    const hdr = APIToken
      ? { ...cfg, Authorization: `Bearer ${APIToken}` }
      : { ...cfg, "X-AUTH-EMAIL": Email, "X-AUTH-KEY": GlobalAPIKey };

    const res = await fetch(`${API}/graphql`, {
      method: "POST",
      headers: hdr,
      body: JSON.stringify({
        query: `query getBillingMetrics($AccountID: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
					viewer { accounts(filter: {accountTag: $AccountID}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) { sum { requests } }
						workersInvocationsAdaptive(limit: 10000, filter: $filter) { sum { requests } }
					} }
				}`,
        variables: { AccountID, filter: { datetime_geq: now.toISOString(), datetime_leq: new Date().toISOString() } },
      }),
    });

    if (!res.ok) throw new Error(`${گشا("5p+l6K+i5aSx6LSlOiA=")}${res.status}`);
    const result = await res.json();
    if (result.errors?.length) throw new Error(result.errors[0].message);

    const acc = result?.data?.viewer?.accounts?.[0];
    if (!acc) throw new Error(گشا("5pyq5om+5Yiw6LSm5oi35pWw5o2u"));

    const pages = sum(acc.pagesFunctionsInvocationsAdaptiveGroups);
    const workers = sum(acc.workersInvocationsAdaptive);
    const total = pages + workers;
    const max = 100000;
    log(
      `${گشا("57uf6K6h57uT5p6cIC0gUGFnZXM6IA==")}${pages}, Workers: ${workers}${گشا("LCDmgLvorqE6IA==")}${total}${گشا("LCDkuIrpmZA6IDEwMDAwMA==")}`,
    );
    return { success: true, pages, workers, total, max };
  } catch (error) {
    console.error(گشا("6I635Y+W5L2/55So6YeP6ZSZ6K+vOg=="), error.message);
    return { success: false, pages: 0, workers: 0, total: 0, max: 100000 };
  }
}

function sha224(s) {
  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
    0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
    0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
    0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
    0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
    0xc67178f2,
  ];
  const r = (n, b) => ((n >>> b) | (n << (32 - b))) >>> 0;
  s = unescape(encodeURIComponent(s));
  const l = s.length * 8;
  s += String.fromCharCode(0x80);
  while ((s.length * 8) % 512 !== 448) s += String.fromCharCode(0);
  const h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
  const hi = Math.floor(l / 0x100000000),
    lo = l & 0xffffffff;
  s += String.fromCharCode(
    (hi >>> 24) & 0xff,
    (hi >>> 16) & 0xff,
    (hi >>> 8) & 0xff,
    hi & 0xff,
    (lo >>> 24) & 0xff,
    (lo >>> 16) & 0xff,
    (lo >>> 8) & 0xff,
    lo & 0xff,
  );
  const w = [];
  for (let i = 0; i < s.length; i += 4)
    w.push((s.charCodeAt(i) << 24) | (s.charCodeAt(i + 1) << 16) | (s.charCodeAt(i + 2) << 8) | s.charCodeAt(i + 3));
  for (let i = 0; i < w.length; i += 16) {
    const x = new Array(64).fill(0);
    for (let j = 0; j < 16; j++) x[j] = w[i + j];
    for (let j = 16; j < 64; j++) {
      const s0 = r(x[j - 15], 7) ^ r(x[j - 15], 18) ^ (x[j - 15] >>> 3);
      const s1 = r(x[j - 2], 17) ^ r(x[j - 2], 19) ^ (x[j - 2] >>> 10);
      x[j] = (x[j - 16] + s0 + x[j - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h0] = h;
    for (let j = 0; j < 64; j++) {
      const S1 = r(e, 6) ^ r(e, 11) ^ r(e, 25),
        ch = (e & f) ^ (~e & g),
        t1 = (h0 + S1 + ch + K[j] + x[j]) >>> 0;
      const S0 = r(a, 2) ^ r(a, 13) ^ r(a, 22),
        maj = (a & b) ^ (a & c) ^ (b & c),
        t2 = (S0 + maj) >>> 0;
      h0 = g;
      g = f;
      f = e;
      e = (d + t1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) >>> 0;
    }
    for (let j = 0; j < 8; j++)
      h[j] =
        (h[j] +
          (j === 0 ? a : j === 1 ? b : j === 2 ? c : j === 3 ? d : j === 4 ? e : j === 5 ? f : j === 6 ? g : h0)) >>>
        0;
  }
  let hex = "";
  for (let i = 0; i < 7; i++) {
    for (let j = 24; j >= 0; j -= 8) hex += ((h[i] >>> j) & 0xff).toString(16).padStart(2, "0");
  }
  return hex;
}

async function تحلیل_نشانی_درگاه(
  آیپی_میانجی,
  هدف_دامنه = "dash.cloudflare.com",
  UUID = "00000000-0000-4000-8000-000000000000",
) {
  آیپی_میانجی = آیپی_میانجی.toLowerCase();
  function تحلیل_نشانی_درگاه_رشته(str) {
    let نشانی = str,
      درگاه = 443;
    if (str.includes("]:")) {
      const parts = str.split("]:");
      نشانی = parts[0] + "]";
      درگاه = parseInt(parts[1], 10) || درگاه;
    } else if ((str.match(/:/g) || []).length === 1 && !str.startsWith("[")) {
      const colonIndex = str.lastIndexOf(":");
      نشانی = str.slice(0, colonIndex);
      درگاه = parseInt(str.slice(colonIndex + 1), 10) || درگاه;
    }
    return [نشانی, درگاه];
  }

  function تحلیل_متنی_میانجی_برگشتی_رکورد(txtData) {
    return txtData
      .flatMap((data) => {
        if (data.startsWith('"') && data.endsWith('"')) data = data.slice(1, -1);
        return data
          .replace(/\\010/g, ",")
          .replace(/\n/g, ",")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
      })
      .map((prefix) => تحلیل_نشانی_درگاه_رشته(prefix));
  }

  const میانجی_برگشتی_آی_پی_آرایه = await تبدیل_به_آرایه(آیپی_میانجی);
  let همه_میانجی_برگشتی_آرایه = [];
  const ipv4Regex =
    /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
  const ipv6Regex = /^\[?(?:[a-fA-F0-9]{0,4}:){1,7}[a-fA-F0-9]{0,4}\]?$/;

  //
  for (const آیپی_میانجی_تکی of میانجی_برگشتی_آی_پی_آرایه) {
    let [نشانی, درگاه] = تحلیل_نشانی_درگاه_رشته(آیپی_میانجی_تکی);

    if (آیپی_میانجی_تکی.includes(".tp")) {
      const tpMatch = آیپی_میانجی_تکی.match(/\.tp(\d+)/);
      if (tpMatch) درگاه = parseInt(tpMatch[1], 10);
    }

    //
    if (ipv4Regex.test(نشانی) || ipv6Regex.test(نشانی)) {
      log(`${گشا("W+WPjeS7o+ino+aekF0g")}${نشانی}${گشا("IOS4uklQ5Zyw5Z2A77yM55u05o6l5L2/55So")}`);
      همه_میانجی_برگشتی_آرایه.push([نشانی, درگاه]);
      continue;
    }

    const [txtRecords, aRecords] = await Promise.all([
      دی_ان_اس_امن_پرس_وجو(نشانی, "TXT"),
      دی_ان_اس_امن_پرس_وجو(نشانی, "A"),
    ]);

    const txtData = txtRecords.filter((r) => r.type === 16).map((r) => r.data);
    const txtAddresses = تحلیل_متنی_میانجی_برگشتی_رکورد(txtData);
    if (txtAddresses.length > 0) {
      log(
        `${گشا("W+WPjeS7o+ino+aekF0g")}${نشانی}${گشا("IOS9v+eUqFRYVOiusOW9le+8jOWFsQ==")}${txtAddresses.length}${گشا("5Liq57uT5p6c")}`,
      );
      همه_میانجی_برگشتی_آرایه.push(...txtAddresses);
      continue;
    }

    const ipv4List = aRecords.filter((r) => r.type === 1).map((r) => r.data);
    if (ipv4List.length > 0) {
      log(
        `${گشا("W+WPjeS7o+ino+aekF0g")}${نشانی}${گشا("IOacquiOt+WPluWIsFRYVOiusOW9le+8jOS9v+eUqEHorrDlvZXvvIzlhbE=")}${ipv4List.length}${گشا("5Liq57uT5p6c")}`,
      );
      همه_میانجی_برگشتی_آرایه.push(...ipv4List.map((ip) => [ip, درگاه]));
      continue;
    }

    const aaaaRecords = await دی_ان_اس_امن_پرس_وجو(نشانی, "AAAA");
    const ipv6List = aaaaRecords.filter((r) => r.type === 28).map((r) => `[${r.data}]`);
    if (ipv6List.length > 0) {
      log(
        `${گشا("W+WPjeS7o+ino+aekF0g")}${نشانی}${گشا("IOacquiOt+WPluWIsFRYVOWSjEHorrDlvZXvvIzkvb/nlKhBQUFB6K6w5b2V77yM5YWx")}${ipv6List.length}${گشا("5Liq57uT5p6c")}`,
      );
      همه_میانجی_برگشتی_آرایه.push(...ipv6List.map((ip) => [ip, درگاه]));
    } else {
      log(
        `${گشا("W+WPjeS7o+ino+aekF0g")}${نشانی}${گشا("IOacquiOt+WPluWIsFRYVOOAgUHlkoxBQUFB6K6w5b2V77yM5L+d55WZ5Y6f5Z+f5ZCN")}`,
      );
      همه_میانجی_برگشتی_آرایه.push([نشانی, درگاه]);
    }
  }
  const مرتب_سازی_بعد_آرایه = همه_میانجی_برگشتی_آرایه.sort((a, b) => a[0].localeCompare(b[0]));
  const هدف_دامنه_ریشه = هدف_دامنه.includes(".") ? هدف_دامنه.split(".").slice(-2).join(".") : هدف_دامنه;
  let تصادفی_بذر = [...(هدف_دامنه_ریشه + UUID)].reduce((a, c) => a + c.charCodeAt(0), 0);
  log(`${گشا("W+WPjeS7o+ino+aekF0g6ZqP5py656eN5a2QOiA=")}${تصادفی_بذر}${گشا("Cuebruagh+ermeeCuTog")}${هدف_دامنه_ریشه}`);
  const ب_ر_بعد = [...مرتب_سازی_بعد_آرایه].sort(
    () => (تصادفی_بذر = (تصادفی_بذر * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff - 0.5,
  );
  const تحلیل_نتیجه = ب_ر_بعد.slice(0, 8);
  log(
    `${گشا("W+WPjeS7o+ino+aekF0g6Kej5p6Q5a6M5oiQIOaAu+aVsDog")}${تحلیل_نتیجه.length}${گشا("5LiqCg==")}${تحلیل_نتیجه.map(([ip, port], index) => `${index + 1}. ${ip}:${port}`).join("\n")}`,
  );
  return تحلیل_نتیجه;
}

// ===== بخش اصلی =====
async function nginx() {
  return `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>

	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>

	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`;
}

async function html1101(host, دسترسی_آی_پی) {
  const now = new Date();
  const قالب_سازی_برچسب_زمانی =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0") +
    " " +
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0") +
    ":" +
    String(now.getSeconds()).padStart(2, "0");
  const تصادفی_رشته = Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `${گشا("PCFET0NUWVBFIGh0bWw+CjwhLS1baWYgbHQgSUUgN10+IDxodG1sIGNsYXNzPSJuby1qcyBpZTYgb2xkaWUiIGxhbmc9ImVuLVVTIj4gPCFbZW5kaWZdLS0+CjwhLS1baWYgSUUgN10+ICAgIDxodG1sIGNsYXNzPSJuby1qcyBpZTcgb2xkaWUiIGxhbmc9ImVuLVVTIj4gPCFbZW5kaWZdLS0+CjwhLS1baWYgSUUgOF0+ICAgIDxodG1sIGNsYXNzPSJuby1qcyBpZTggb2xkaWUiIGxhbmc9ImVuLVVTIj4gPCFbZW5kaWZdLS0+CjwhLS1baWYgZ3QgSUUgOF0+PCEtLT4gPGh0bWwgY2xhc3M9Im5vLWpzIiBsYW5nPSJlbi1VUyI+IDwhLS08IVtlbmRpZl0tLT4KPGhlYWQ+Cjx0aXRsZT5Xb3JrZXIgdGhyZXcgZXhjZXB0aW9uIHwg")}${host}${گشا("IHwgQ2xvdWRmbGFyZTwvdGl0bGU+CjxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgo8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LVR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD1VVEYtOCIgLz4KPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1FZGdlIiAvPgo8bWV0YSBuYW1lPSJyb2JvdHMiIGNvbnRlbnQ9Im5vaW5kZXgsIG5vZm9sbG93IiAvPgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSIgLz4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBpZD0iY2Zfc3R5bGVzLWNzcyIgaHJlZj0iL2Nkbi1jZ2kvc3R5bGVzL2NmLmVycm9ycy5jc3MiIC8+CjwhLS1baWYgbHQgSUUgOV0+PGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBpZD0nY2Zfc3R5bGVzLWllLWNzcycgaHJlZj0iL2Nkbi1jZ2kvc3R5bGVzL2NmLmVycm9ycy5pZS5jc3MiIC8+PCFbZW5kaWZdLS0+CjxzdHlsZT5ib2R5e21hcmdpbjowO3BhZGRpbmc6MH08L3N0eWxlPgoKCjwhLS1baWYgZ3RlIElFIDEwXT48IS0tPgo8c2NyaXB0PgogIGlmICghbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHsKICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkgewogICAgICB2YXIgY29va2llRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llLWFsZXJ0Jyk7CiAgICAgIGNvb2tpZUVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOwogICAgfSkKICB9Cjwvc2NyaXB0Pgo8IS0tPCFbZW5kaWZdLS0+Cgo8L2hlYWQ+Cjxib2R5PgogICAgPGRpdiBpZD0iY2Ytd3JhcHBlciI+CiAgICAgICAgPGRpdiBjbGFzcz0iY2YtYWxlcnQgY2YtYWxlcnQtZXJyb3IgY2YtY29va2llLWVycm9yIiBpZD0iY29va2llLWFsZXJ0IiBkYXRhLXRyYW5zbGF0ZT0iZW5hYmxlX2Nvb2tpZXMiPlBsZWFzZSBlbmFibGUgY29va2llcy48L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJjZi1lcnJvci1kZXRhaWxzIiBjbGFzcz0iY2YtZXJyb3ItZGV0YWlscy13cmFwcGVyIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY2Ytd3JhcHBlciBjZi1oZWFkZXIgY2YtZXJyb3Itb3ZlcnZpZXciPgogICAgICAgICAgICAgICAgPGgxPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJjZi1lcnJvci10eXBlIiBkYXRhLXRyYW5zbGF0ZT0iZXJyb3IiPkVycm9yPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJjZi1lcnJvci1jb2RlIj4xMTAxPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz0iaGVhZGluZy1yYXktaWQiPlJheSBJRDog")}${تصادفی_رشته} &bull; ${قالب_سازی_برچسب_زمانی}${گشا("IFVUQzwvc21hbGw+CiAgICAgICAgICAgICAgICA8L2gxPgogICAgICAgICAgICAgICAgPGgyIGNsYXNzPSJjZi1zdWJoZWFkbGluZSIgZGF0YS10cmFuc2xhdGU9ImVycm9yX2Rlc2MiPldvcmtlciB0aHJldyBleGNlcHRpb248L2gyPgogICAgICAgICAgICA8L2Rpdj48IS0tIC8uaGVhZGVyIC0tPgoKICAgICAgICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPjwhLS0gc3BhY2VyIC0tPgoKICAgICAgICAgICAgPGRpdiBjbGFzcz0iY2Ytc2VjdGlvbiBjZi13cmFwcGVyIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNmLWNvbHVtbnMgdHdvIj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjZi1jb2x1bW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8aDIgZGF0YS10cmFuc2xhdGU9IndoYXRfaGFwcGVuZWQiPldoYXQgaGFwcGVuZWQ/PC9oMj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSd2ZSByZXF1ZXN0ZWQgYSBwYWdlIG9uIGEgd2Vic2l0ZSAo")}${host}${گشا("KSB0aGF0IGlzIG9uIHRoZSA8YSBocmVmPSJodHRwczovL3d3dy5jbG91ZGZsYXJlLmNvbS81eHgtZXJyb3ItbGFuZGluZz91dG1fc291cmNlPWVycm9yXzEwMHgiIHRhcmdldD0iX2JsYW5rIj5DbG91ZGZsYXJlPC9hPiBuZXR3b3JrLiBBbiB1bmtub3duIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlbmRlcmluZyB0aGUgcGFnZS48L3A+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNmLWNvbHVtbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBkYXRhLXRyYW5zbGF0ZT0id2hhdF9jYW5faV9kbyI+V2hhdCBjYW4gSSBkbz88L2gyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5JZiB5b3UgYXJlIHRoZSBvd25lciBvZiB0aGlzIHdlYnNpdGU6PC9zdHJvbmc+PGJyIC8+cmVmZXIgdG8gPGEgaHJlZj0iaHR0cHM6Ly9kZXZlbG9wZXJzLmNsb3VkZmxhcmUuY29tL3dvcmtlcnMvb2JzZXJ2YWJpbGl0eS9lcnJvcnMvIiB0YXJnZXQ9Il9ibGFuayI+V29ya2VycyAtIEVycm9ycyBhbmQgRXhjZXB0aW9uczwvYT4gYW5kIGNoZWNrIFdvcmtlcnMgTG9ncyBmb3Ig")}${host}${گشا("LjwvcD4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+PCEtLSAvLnNlY3Rpb24gLS0+CgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjZi1lcnJvci1mb290ZXIgY2Ytd3JhcHBlciB3LTI0MCBsZzp3LWZ1bGwgcHktMTAgc206cHktNCBzbTpweC04IG14LWF1dG8gdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0IGJvcmRlci1zb2xpZCBib3JkZXItMCBib3JkZXItdCBib3JkZXItZ3JheS0zMDAiPgogICAgPHAgY2xhc3M9InRleHQtMTMiPgogICAgICA8c3BhbiBjbGFzcz0iY2YtZm9vdGVyLWl0ZW0gc206YmxvY2sgc206bWItMSI+Q2xvdWRmbGFyZSBSYXkgSUQ6IDxzdHJvbmcgY2xhc3M9ImZvbnQtc2VtaWJvbGQiPiA=")}${تصادفی_رشته}${گشا("PC9zdHJvbmc+PC9zcGFuPgogICAgICA8c3BhbiBjbGFzcz0iY2YtZm9vdGVyLXNlcGFyYXRvciBzbTpoaWRkZW4iPiZidWxsOzwvc3Bhbj4KICAgICAgPHNwYW4gaWQ9ImNmLWZvb3Rlci1pdGVtLWlwIiBjbGFzcz0iY2YtZm9vdGVyLWl0ZW0gaGlkZGVuIHNtOmJsb2NrIHNtOm1iLTEiPgogICAgICAgIFlvdXIgSVA6CiAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGlkPSJjZi1mb290ZXItaXAtcmV2ZWFsIiBjbGFzcz0iY2YtZm9vdGVyLWlwLXJldmVhbC1idG4iPkNsaWNrIHRvIHJldmVhbDwvYnV0dG9uPgogICAgICAgIDxzcGFuIGNsYXNzPSJoaWRkZW4iIGlkPSJjZi1mb290ZXItaXAiPg==")}${دسترسی_آی_پی}${گشا("PC9zcGFuPgogICAgICAgIDxzcGFuIGNsYXNzPSJjZi1mb290ZXItc2VwYXJhdG9yIHNtOmhpZGRlbiI+JmJ1bGw7PC9zcGFuPgogICAgICA8L3NwYW4+CiAgICAgIDxzcGFuIGNsYXNzPSJjZi1mb290ZXItaXRlbSBzbTpibG9jayBzbTptYi0xIj48c3Bhbj5QZXJmb3JtYW5jZSAmYW1wOyBzZWN1cml0eSBieTwvc3Bhbj4gPGEgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwczovL3d3dy5jbG91ZGZsYXJlLmNvbS81eHgtZXJyb3ItbGFuZGluZyIgaWQ9ImJyYW5kX2xpbmsiIHRhcmdldD0iX2JsYW5rIj5DbG91ZGZsYXJlPC9hPjwvc3Bhbj4KCiAgICA8L3A+CiAgICA8c2NyaXB0PihmdW5jdGlvbigpe2Z1bmN0aW9uIGQoKXt2YXIgYj1hLmdldEVsZW1lbnRCeUlkKCJjZi1mb290ZXItaXRlbS1pcCIpLGM9YS5nZXRFbGVtZW50QnlJZCgiY2YtZm9vdGVyLWlwLXJldmVhbCIpO2ImJiJjbGFzc0xpc3QiaW4gYiYmKGIuY2xhc3NMaXN0LnJlbW92ZSgiaGlkZGVuIiksYy5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsZnVuY3Rpb24oKXtjLmNsYXNzTGlzdC5hZGQoImhpZGRlbiIpO2EuZ2V0RWxlbWVudEJ5SWQoImNmLWZvb3Rlci1pcCIpLmNsYXNzTGlzdC5yZW1vdmUoImhpZGRlbiIpfSkpfXZhciBhPWRvY3VtZW50O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcigiRE9NQ29udGVudExvYWRlZCIsZCl9KSgpOzwvc2NyaXB0PgogIDwvZGl2PjwhLS0gLy5lcnJvci1mb290ZXIgLS0+CgogICAgICAgIDwvZGl2PjwhLS0gLyNjZi1lcnJvci1kZXRhaWxzIC0tPgogICAgPC9kaXY+PCEtLSAvI2NmLXdyYXBwZXIgLS0+CgogICAgIDxzY3JpcHQ+CiAgICB3aW5kb3cuX2NmX3RyYW5zbGF0aW9uID0ge307CgoKICA8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+")}`;
}
