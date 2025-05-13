import { test, expect, request } from '@playwright/test';
// ✅ เคสที่ควร PASS
test('TC_001 API e-documents/apply success ', async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,  // <<== เพิ่มบรรทัดนี้
     extraHTTPHeaders: {
    'X-Correlation-ID': '94020162-3a10-46d9-9244-56ea442b6850',
    'X-CRMID': '001100000000000000000016594036',
    'Content-Type': 'application/json',
    'Accept-Language': 'EN',
    'X-Forward-For': '49.49.229.147',
    'device-id': 'fMpBlyqhZHqmIKq+y3pHfZTdft2AzBsNiNYBcax1TpIWvMFLWbSXIisUH+q/CiIG/ce3EOKCp/',
    'client-version': '5.12.0'
  }
});
  
  const response = await apiContext.post ('https://documents-service-https-internal-oneapp-issit.apps.ddid1.tmbcps.com/v1/documents-service/e-documents/apply'); 
  
  // ตรวจสอบว่า status เป็น 2xx  
  // เช็คว่า status เป็น 200
  expect(response.status()).toBe(200);

  // (เพิ่มได้) เช็คว่า response ok จริง
  //expect(response.ok()).toBeTruthy();

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

// ❌ เคสที่ควร FAIL 
test('TC_002 API e-documents/apply FAIL error 500 code 109043', async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,  // <<== เพิ่มบรรทัดนี้
     extraHTTPHeaders: {
    'X-Correlation-ID': '999999',
    'X-CRMID': '001100000000000000000016594036',
    'Content-Type': 'application/json',
    'Accept-Language': 'EN',
    'X-Forward-For': '49.49.229.147',
    'device-id': 'fMpBlyqhZHqmIKq+y3pHfZTdft2AzBsNiNYBcax1TpIWvMFLWbSXIisUH+q/CiIG/ce3EOKCp/',
    'client-version': '5.12.0'
  }
  });
  
  const response = await apiContext.post ('https://documents-service-https-internal-oneapp-issit.apps.ddid1.tmbcps.com/v1/documents-service/e-documents/apply'); 
  
  // ตรวจสอบว่า status เป็น 2xx  
  // เช็คว่า status เป็น 200
  expect(response.status()).toBe(500);

  // (เพิ่มได้) เช็คว่า response ok จริง
  //expect(response.ok()).toBeTruthy();

  // แปลง response เป็น json
  const responseBody = await response.json();

  // เริ่มตรวจสอบเนื้อหา response
  expect(responseBody.status.code).toBe('109043');
  expect(responseBody.status.message).toBe('API Error');
  expect(responseBody.status.service).toBe('documents-service');
  expect(responseBody.status.description.en).toBe('We cannot proceed with your request right now, sorry for your inconvenience. For additional information, please call ttb contact center 1428.');
  expect(responseBody.status.description.th).toBe('ธนาคารขออภัยในความไม่สะดวกมา ณ ที่นี้ สอบถามเพิ่มเติม ติดต่อ ทีทีบี คอนแทค เซ็นเตอร์ โทร.1428');

  // ตรวจสอบว่า data เป็น null

  expect(responseBody.data).toBeNull();
});

test('TC_003 API e-documents/apply FAIL error 400 code 0010', async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,  // <<== เพิ่มบรรทัดนี้
     extraHTTPHeaders: {
    'X-Correlation-ID': '94020162-3a10-46d9-9244-56ea442b6850',
    'Content-Type': 'application/json',
    'Accept-Language': 'EN',
    'X-Forward-For': '49.49.229.147',
    'device-id': 'fMpBlyqhZHqmIKq+y3pHfZTdft2AzBsNiNYBcax1TpIWvMFLWbSXIisUH+q/CiIG/ce3EOKCp/',
    'client-version': '5.12.0'
  }
  });
  
  const response = await apiContext.post ('https://documents-service-https-internal-oneapp-issit.apps.ddid1.tmbcps.com/v1/documents-service/e-documents/apply'); 
  
  // ตรวจสอบว่า status เป็น 2xx  
  // เช็คว่า status เป็น 200
  expect(response.status()).toBe(400);

  // (เพิ่มได้) เช็คว่า response ok จริง
  //expect(response.ok()).toBeTruthy();

  // แปลง response เป็น json
  const responseBody = await response.json();

  // เริ่มตรวจสอบเนื้อหา response
  expect(responseBody.status.code).toBe('0010');
  expect(responseBody.status.message).toBe('Failed');
  expect(responseBody.status.service).toBe('documents-service');
  expect(responseBody.status.description.en).toBe('Invalid Request');
  expect(responseBody.status.description.th).toBe('Invalid Request');

  // ตรวจสอบว่า data เป็น null

  expect(responseBody.data).toBeNull();
});
test('TC_004 API e-documents/apply FAIL error 400 code 100004 The input values do not match the expected declaration', async () => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,  // <<== เพิ่มบรรทัดนี้
     extraHTTPHeaders: {
    'X-Correlation-ID': '94020162-3a10-46d9-9244-56ea442b6850',
    'Content-Type': 'application/json',
    'Accept-Language': 'JP',
    'X-CRMID': '001100000000000000000016594036',
    'X-Forward-For': '49.49.229.147',
    'device-id': 'fMpBlyqhZHqmIKq+y3pHfZTdft2AzBsNiNYBcax1TpIWvMFLWbSXIisUH+q/CiIG/ce3EOKCp/',
    'client-version': '5.12.0'
  }
  });
  
  const response = await apiContext.post ('https://documents-service-https-internal-oneapp-issit.apps.ddid1.tmbcps.com/v1/documents-service/e-documents/apply'); 
  
  // ตรวจสอบว่า status เป็น 2xx  
  // เช็คว่า status เป็น 200
  expect(response.status()).toBe(400);

  // (เพิ่มได้) เช็คว่า response ok จริง
  //expect(response.ok()).toBeTruthy();

  // แปลง response เป็น json
  const responseBody = await response.json();

  // เริ่มตรวจสอบเนื้อหา response
  expect(responseBody.status.code).toBe('100004');
  expect(responseBody.status.message).toBe('Bad Request');
  expect(responseBody.status.service).toBe('documents-service');
  expect(responseBody.status.description.en).toBe('Bad request');
  expect(responseBody.status.description.th).toBe('Bad request');


  // ตรวจสอบว่า data เป็น null

  expect(responseBody.data).toBeNull();
});