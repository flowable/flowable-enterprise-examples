package com.example.democontrol.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

import com.flowable.control.logic.constant.ControlPrivileges;

public class FlowableControlOAuth2UserService implements OAuth2UserService<OidcUserRequest, OidcUser> {

    private static final String ATTRIBUTE_PREFERRED_USERNAME = "preferred_username";

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        // TODO: check if token has permissions to use Flowable Control
        boolean userHasPermissionsToAccessFlowableControl = true;

        if (!userHasPermissionsToAccessFlowableControl) {
            throw new OAuth2AuthenticationException(
                    new OAuth2Error(userRequest.getIdToken().getClaimAsString(ATTRIBUTE_PREFERRED_USERNAME) + " not authorized")
            );
        }

        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(ControlPrivileges.ACCESS_CONTROL));
        grantedAuthorities.add(new SimpleGrantedAuthority(ControlPrivileges.ACCESS_ADMIN));
        grantedAuthorities.add(new SimpleGrantedAuthority(ControlPrivileges.ADMIN));
        return new ControlOidcUser(grantedAuthorities, userRequest.getIdToken());
    }

}
