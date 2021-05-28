package com.example.democontrol.security;

import java.util.Collections;

import org.apache.http.Header;
import org.apache.http.auth.AUTH;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicHeader;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Component;

import com.flowable.control.logic.domain.ServerConfig;
import com.flowable.control.logic.service.http.HttpClientProvider;

@Component
public class OAuth2TokenHttpClientProvider implements HttpClientProvider {

	@Override
	public CloseableHttpClient getHttpClient(ServerConfig serverConfig) {
		HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
		DefaultOidcUser oidcUser = getOidcUser();
		if (oidcUser != null) {
			Header header = new BasicHeader(AUTH.WWW_AUTH_RESP, "Bearer " + oidcUser.getIdToken().getTokenValue());
			httpClientBuilder.setDefaultHeaders(Collections.singleton(header));
		}
		return httpClientBuilder.build();
	}

	private static DefaultOidcUser getOidcUser() {
		if (getAuthentication() != null) {
			Object principal = getAuthentication().getPrincipal();
			if (principal instanceof DefaultOidcUser) {
				return (DefaultOidcUser) principal;
			}
		}
		return null;
	}

	private static Authentication getAuthentication() {
		SecurityContext securityContext = SecurityContextHolder.getContext();
		if (securityContext != null && securityContext.getAuthentication() != null) {
			return securityContext.getAuthentication();
		}
		return null;
	}

}
