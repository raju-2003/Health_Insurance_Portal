package azzure.health.portal.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import azzure.health.portal.dto.request.AuthenticationRequest;
import azzure.health.portal.dto.request.RegisterRequest;
import azzure.health.portal.dto.response.AuthenticationResponse;
import azzure.health.portal.entity.Role;
import azzure.health.portal.entity.User;
import azzure.health.portal.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public String register(RegisterRequest request) {

        
        var user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .usertype(request.getUsertype())
                .userid(request.getUserid())
                .role(Role.USER)
                .build();
        userRepository.save(user);

        return "User Registered Successfully";
        

        // var jwtToken = jwtService.generateToken(user);
        // return AuthenticationResponse.builder()
        //         .token(jwtToken)
        //         .build();
        
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    

}
