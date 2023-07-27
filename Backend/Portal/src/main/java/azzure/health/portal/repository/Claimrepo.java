package azzure.health.portal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import azzure.health.portal.entity.Claim;

public interface Claimrepo extends JpaRepository<Claim, Long> {

    @Query(value = "SELECT * FROM claim WHERE clientprofileid = ?1", nativeQuery = true)
    List<Claim> findByClientprofileid(Long clientprofileid);

    @Query(value = "SELECT * FROM claim WHERE companyname = ?1", nativeQuery = true)
    List<Claim> findByCompanyname(String companyname);
    
}
