package azzure.health.portal.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.dto.request.AuthenticationRequest;
import azzure.health.portal.dto.request.RegisterRequest;
import azzure.health.portal.dto.response.AuthenticationResponse;
import azzure.health.portal.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController

@RequiredArgsConstructor
public class AuthenticationController {


    private final AuthenticationService authenticationService;

    @PostMapping("/user/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/user/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

   
    
}
