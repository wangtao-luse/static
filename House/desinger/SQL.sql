1.用户表 T_A_ACCOUNT
 CREATE TABLE T_A_ACCOUNT(
  ID NUMBER,
  PHONE VARCHAR2(11),
  PWD VARCHAR2(18),
  CREATE_DATE DATE,
  STATUS VARCHAR2(2),
  LAST_DATE DATE

);
CREATE SEQUENCE SEQ_T_A_ACCOUNT;