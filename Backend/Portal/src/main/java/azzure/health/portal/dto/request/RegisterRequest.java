package azzure.health.portal.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class RegisterRequest {
    private String name;
    private String email;
    private String usertype;
    private long userid;
    private String password;
}
