package azzure.health.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Renew;
import azzure.health.portal.repository.Renewrepo;

@Service

public class RenewService {
    @Autowired
    private Renewrepo renewrepo;

    public List<Renew> getRenew() {
        return renewrepo.findAll();
    }

    public String addRenew(Renew renew) {
        return " renew amount : " + renewrepo.save(renew).getRenewamount() + " and  renew id : " + renewrepo.save(renew).getRenewid();
    }

    public void deleteRenew(Long id) {
        try {
            renewrepo.deleteById(id);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public Optional<Renew> getRenewByid(Long id) {
        return renewrepo.findById(id);
    }
    
}
