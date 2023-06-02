-- 한 페이지에 10개 게시글 조회
SELECT *
FROM (
    SELECT ROWNUM no
          ,board_no
          ,writer
          ,content
          ,reg_date
          ,upd_date
          ,views
    FROM board
    ORDER BY reg_date DESC
) b
WHERE no <= 10
;

-- page : 2
-- 페이지당 게시글 수 : 10
-- 가져올 데이터    : 11 ~ 20 번 게시글
SELECT *
FROM (
    SELECT ROWNUM no
          ,board_no
          ,writer
          ,content
          ,reg_date
          ,upd_date
          ,views
    FROM board
    ORDER BY reg_date DESC
) b
WHERE no >= 11 
  AND no <= 20
;
