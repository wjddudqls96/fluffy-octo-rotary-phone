package com.example.backend.repository.groupaccount;

import com.example.backend.entity.GroupAccount;
import com.example.backend.entity.GroupAccountHistory;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupAccountRepository extends JpaRepository<GroupAccount, String> {

    List<GroupAccount> findAllByMemberId(Long memberId);

    GroupAccount findByUrl(String url);
}
