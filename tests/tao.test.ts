import { test, expect, request } from '@playwright/test';

test('ทดสอบ API GET ผู้ใช้', async () => {
  const apiContext = await request.newContext({
     extraHTTPHeaders: {
    'X-Correlation-ID': '1222333',
    'X-CRMID': '001100000000000000000016594036',
    'Content-Type': 'application/json'
  }
});

  const response = await apiContext.post ('https://documents-service-https-internal-oneapp-issit.apps.ddid1.tmbcps.com/v1/documents-service/e-documents/apply');
  

expect(response.status()).toBe(200); // ตรวจสอบว่า status เป็น 2xx

  // แปลง response เป็น json
  const responseBody = await response.json();

  // เริ่มตรวจสอบเนื้อหา response
  expect(responseBody.status.code).toBe('000000');
  expect(responseBody.status.message).toBe('success');
  expect(responseBody.status.service).toBe('documents-service');
  expect(responseBody.status.description.en).toBe('success');
  expect(responseBody.status.description.th).toBe('สำเร็จ');

  // ตรวจสอบว่า data เป็น null
  expect(responseBody.data).toBeNull();
});