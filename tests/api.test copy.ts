import { test, expect, request } from '@playwright/test';

test('อัปเดต e-statement สำเร็จ', async () => {
  const apiContext = await request.newContext({
    extraHTTPHeaders: {
      Authorization: `Bearer YOUR_TOKEN_HERE`,
      'Content-Type': 'application/json'
    }
  });

  const requestBody = {
    e_consolidate_statement_flag: "N",
    e_creditcard_statement_flag: "N",
    e_ready_cash_statement_flag: "N",
    e_cash_to_go_statement_flag: "N",
    w_consolidate_statement_flag: "N",
    e_lending_statement_flag: "N",
    e_mutual_fund_statement_flag: "N",
    e_bancassurance_statement_flag: "N",
    e_receipt_consent_flag_al: "Y",
    e_deposit_document_flag: "N",
    apply_customer_level_flag: "",
    channel_apply_customer_level: "MB"
  };

  const response = await apiContext.put(
    'https://documents-core-service-https-internal-oneapp-sit.apps.ddid1.tmbcps.com/v1/documents-core-service/ete/update-e-statement',
    { data: requestBody }
  );

  expect(response.status()).toBe(200); // ตรวจสอบว่า Response OK

  const resBody = await response.json();
  console.log('Response:', resBody);

  // ตรวจสอบค่าที่คาดหวังจาก response (แล้วแต่ระบบส่งกลับ)
  expect(resBody.status || resBody.success).toBeTruthy(); // ใช้ status หรือ success ขึ้นกับระบบ
});