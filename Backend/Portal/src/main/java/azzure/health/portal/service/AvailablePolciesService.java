package azzure.health.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Availablepolicies;
import azzure.health.portal.repository.Availablepoliciesrepo;

@Service
public class AvailablePolciesService {
    @Autowired
    private Availablepoliciesrepo availablepoliciesrepo;

    public List<Availablepolicies> getAvailablePolicies() {
        return availablepoliciesrepo.findAll();
    }

    public String registerAvailablePolicies(Availablepolicies availablepolicies) {
        if(availablepoliciesrepo.findById(availablepolicies.getPolicyid()).isPresent()) {
            return "Policy already exists";
        }
        availablepoliciesrepo.save(availablepolicies);
        return "Policy registered successfully";
    }

    public Optional<Availablepolicies> getAvailablePoliciesById(long id) {
        return availablepoliciesrepo.findById(id);
    }

    public String updateAvailablePolicies(long id, Availablepolicies availablepolicies) {
        if(availablepoliciesrepo.findById(id) != null) {
            Availablepolicies availablepolicies1 = availablepoliciesrepo.findById(id).get();
            availablepolicies1.setPolicyname(availablepolicies.getPolicyname());
            availablepolicies1.setCompanyname(availablepolicies.getCompanyname());
            availablepolicies1.setContact(availablepolicies.getContact());
            availablepolicies1.setCoverageamount(availablepolicies.getCoverageamount());
            availablepolicies1.setPremiumamount(availablepolicies.getPremiumamount());
            availablepoliciesrepo.saveAndFlush(availablepolicies1);
            return "Policy updated successfully";
        }
        return "Policy not found";
    }

    public String deleteAvailablePolicies(long id) {
        try {
            availablepoliciesrepo.deleteById(id);
            return "Policy deleted successfully";
        } catch (Exception e) {
            return "Policy not found";
        }
    }
    
}
