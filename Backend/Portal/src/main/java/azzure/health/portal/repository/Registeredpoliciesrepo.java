package azzure.health.portal.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import azzure.health.portal.entity.Registeredpolicies;


public interface Registeredpoliciesrepo extends JpaRepository<Registeredpolicies, Long> {
    
}
