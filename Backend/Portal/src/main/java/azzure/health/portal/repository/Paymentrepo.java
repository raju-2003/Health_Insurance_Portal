package azzure.health.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import azzure.health.portal.entity.Payment;

public interface Paymentrepo extends JpaRepository<Payment, Long> {
    
}
