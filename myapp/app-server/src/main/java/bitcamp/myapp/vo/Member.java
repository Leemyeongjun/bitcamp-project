package bitcamp.myapp.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Member {
  private int no;
  private String name;
  private String nickname;
  private String email;
  private String password;
  private String tel;
  private String created_date;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date createdDate;
}
