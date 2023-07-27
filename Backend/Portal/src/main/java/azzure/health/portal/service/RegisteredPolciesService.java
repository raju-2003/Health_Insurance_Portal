package azzure.health.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Registeredpolicies;
import azzure.health.portal.repository.Registeredpoliciesrepo;

@Service
public class RegisteredPolciesService {
    @Autowired
    private Registeredpoliciesrepo registeredpoliciesrepo;

    public List<Registeredpolicies> getRegisteredPolicies() {
        return registeredpoliciesrepo.findAll();
    }

    public String registerRegisteredPolicies(Registeredpolicies registeredpolicies) {
        if(registeredpoliciesrepo.findById(registeredpolicies.getPolicyid()).isPresent()) {
            return "Policy already exists";
        }
        registeredpoliciesrepo.save(registeredpolicies);
        return "Policy registered successfully";
    }

    public Optional<Registeredpolicies> getRegisteredPoliciesById(long id) {
        return registeredpoliciesrepo.findById(id);
    }

    public String updateRegisteredPolicies(long id, Registeredpolicies registeredpolicies) {
        if(registeredpoliciesrepo.findById(id) == null) {
            return "Policy does not exist";
        }
        registeredpoliciesrepo.saveAndFlush(registeredpolicies);
        return "Policy updated successfully";
    }

    public String deleteRegisteredPolicies(long id) {
        try {
            registeredpoliciesrepo.deleteById(id);
            return "Policy deleted successfully";
        } catch(Exception e) {
            return "Policy does not exist";
        }
    }
    
}
