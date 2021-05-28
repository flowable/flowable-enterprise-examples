package com.example.democontrol.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;

import com.flowable.control.logic.security.ControlUserDetails;

class ControlOidcUser extends DefaultOidcUser implements ControlUserDetails {

    public ControlOidcUser(Collection<? extends GrantedAuthority> authorities, OidcIdToken idToken) {
        super(authorities, idToken);
    }

    @Override
    public String getFullName() {
        return super.getFullName();
    }

    @Override
    public String getEmail() {
        return super.getEmail();
    }

    @Override
    public String getFirstName() {
        return null;
    }

    @Override
    public String getLastName() {
        return null;
    }
}
