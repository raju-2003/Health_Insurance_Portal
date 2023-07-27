package azzure.health.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import azzure.health.portal.entity.Client;

public interface Clientrepo extends JpaRepository<Client, Long> {


    
}
