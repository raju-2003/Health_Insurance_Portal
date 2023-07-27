package azzure.health.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import azzure.health.portal.entity.Company;

public interface Companyrepo extends JpaRepository<Company, Long>{
    
}
