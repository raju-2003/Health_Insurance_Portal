package azzure.health.portal.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "company")
public class Company {
    @Id
    private long companyid;
    private String companyname;
    private String doorno;
    private String street;
    private String city;
    private String district;
    private String state;
    private long pincode;
    private long mobile;
    private String email;
}
