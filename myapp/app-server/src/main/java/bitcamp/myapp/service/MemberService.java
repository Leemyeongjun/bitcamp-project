package bitcamp.myapp.service;

import java.util.List;
import bitcamp.myapp.vo.Member;

public interface MemberService {
  void add(Member member);
  List<Member> list();
  Member get(int no);
  Member get(String email, String password);
}
