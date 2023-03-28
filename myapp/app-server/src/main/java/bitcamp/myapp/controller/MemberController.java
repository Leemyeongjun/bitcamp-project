package bitcamp.myapp.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.myapp.service.MemberService;
import bitcamp.myapp.vo.Member;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
@RequestMapping("/members")
public class MemberController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("MemberController 생성됨!");
  }

  @Autowired private MemberService memberService;

  @PostMapping
  public Object insert(@RequestBody Member member) {
    memberService.add(member);
    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

}
