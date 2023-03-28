package bitcamp.myapp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.myapp.dao.MemberDao;
import bitcamp.myapp.service.MemberService;
import bitcamp.myapp.vo.Member;

@Service
public class DefaultMemberService implements MemberService {
  @Autowired private MemberDao memberDao;

  @Transactional
  @Override
  public void add(Member member) {
    memberDao.insert(member);
  }
}
