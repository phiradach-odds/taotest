export type RequestBodyType = {
    e_consolidate_statement_flag?: string;
    e_creditcard_statement_flag?: string;
    e_ready_cash_statement_flag?: string;
    e_cash_to_go_statement_flag?: string;
    w_consolidate_statement_flag?: string;
    e_lending_statement_flag?: string;
    e_mutual_fund_statement_flag?: string;
    e_bancassurance_statement_flag?: string;
    e_receipt_consent_flag_al?: string;
    e_deposit_document_flag?: string;
    apply_customer_level_flag?: string;
    channel_apply_customer_level?: string;
  };
  
  export function generateRequestBody(overrides: RequestBodyType = {}): RequestBodyType {
    return {
      e_consolidate_statement_flag: "N",
      e_creditcard_statement_flag: "N",
      e_ready_cash_statement_flag: "N",
      e_cash_to_go_statement_flag: "N",
      w_consolidate_statement_flag: "N",
      e_lending_statement_flag: "N",
      e_mutual_fund_statement_flag: "N",
      e_bancassurance_statement_flag: "N",
      e_receipt_consent_flag_al: "N",
      e_deposit_document_flag: "N",
      apply_customer_level_flag: "N",
      channel_apply_customer_level: "MB",
      ...overrides,
    };
  }