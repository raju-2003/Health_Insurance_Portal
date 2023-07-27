package azzure.health.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Company;
import azzure.health.portal.repository.Companyrepo;

@Service
public class CompanyService {
    @Autowired
    private Companyrepo companyRepository;

	public List<Company> getCompany() {
		return companyRepository.findAll();
	}

    public String registerCompany(Company company) {
        if(companyRepository.findById(company.getCompanyid() ).isPresent()) {
            return "Company already exists";
        }
        companyRepository.save(company);
        return "Company registered successfully";
    }

    public  Optional<Company> getCompanyById(long id) {
        return companyRepository.findById(id);

    }

    public Company updateCompany(long id, Company company) {
        Company company1 = companyRepository.findById(id).get();
        company1.setCompanyname(company.getCompanyname());
        company1.setDoorno(company.getDoorno());
        company1.setStreet(company.getStreet());
        company1.setCity(company.getCity());
        company1.setDistrict(company.getDistrict());
        company1.setState(company.getState());
        company1.setPincode(company.getPincode());
        company1.setMobile(company.getMobile());
        company1.setEmail(company.getEmail());
        companyRepository.saveAndFlush(company1);
        return company1;
    }

    public String deleteCompany(long id) {
        return companyRepository.findById(id).map(company -> {
            companyRepository.delete(company);
            return "deleted";
        }).orElseThrow(() -> new IllegalArgumentException("Invalid id " + id));
    }
    
}
