package azzure.health.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Payment;
import azzure.health.portal.repository.Paymentrepo;

@Service
public class PaymentService {
    @Autowired
    private Paymentrepo paymentrepo;

    public List<Payment> getAllPayment() {
        return paymentrepo.findAll();
    }

    public Optional<Payment> getPayment(Long id) {
        return paymentrepo.findById(id);
    }

    public long addPayment(Payment payment) {
        return paymentrepo.save(payment).getPaymentid();
    }
    
}
