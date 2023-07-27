package azzure.health.portal.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.entity.Payment;
import azzure.health.portal.service.PaymentService;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/user/payment")
    public List<Payment> getAllPayment() {
        return paymentService.getAllPayment();
    }
    
    @GetMapping("/user/payment/{id}")
    public Optional<Payment> getPayment(@PathVariable Long id) {
        return paymentService.getPayment(id);
    }

    @PostMapping("/user/policy/payment")
    public long addPayment(@RequestBody Payment payment) {
        return paymentService.addPayment(payment);
    }

    
}
