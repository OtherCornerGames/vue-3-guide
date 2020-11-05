(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{381:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"json-web-tokens-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-web-tokens-jwt"}},[t._v("#")]),t._v(" JSON Web Tokens (JWT)")]),t._v(" "),a("p",[t._v("Tokens are an open, industry standard "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7519"),a("OutboundLink")],1),t._v(" method for representing claims securely between two parties. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.")]),t._v(" "),a("p",[t._v("Tokens are generally comprised of three parts the "),a("code",[t._v("header")]),t._v(", "),a("code",[t._v("payload")]),t._v(", and "),a("code",[t._v("signature")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),a("p",[t._v("The header typically consists of two parts: the type of the token, and the algorithm used for signing the token, such as "),a("code",[t._v("HMAC")]),t._v(" "),a("code",[t._v("SHA256")]),t._v(" or "),a("code",[t._v("RSA")]),t._v(". The header is encoded with "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Base64",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("base64")]),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"payload-claims"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-claims"}},[t._v("#")]),t._v(" Payload & Claims")]),t._v(" "),a("p",[t._v("The second part of the token is the payload, which contains claims. Claims are statements about a user with some additional data. There are three types of claims: registered, public, and private claims.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Registered")]),t._v(" "),a("ul",[a("li",[t._v("These claims provide basic interoperable details such as a unique identify, the token issuer, and the intended audience of the token.")])])]),t._v(" "),a("li",[a("strong",[t._v("Public")]),t._v(" "),a("ul",[a("li",[t._v("Public claims need to be namespaced and usually include the domain of the application where they are used."),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https://blog.domain.com/profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jimmy Tester"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https://game.domain.com/profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jimmy117"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("strong",[t._v("Private")]),t._v(" "),a("ul",[a("li",[t._v("These claims are intended to convey information that is private and not user driven. These claims can include the users permissions for a particular application"),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https://blog.domain.com/permissions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create:blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edit:blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https://admin.domain.com/roles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moderator"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https://admin.domain.com/permissions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete:comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("IMPORTANT")]),t._v(" The data in signed tokens is only "),a("a",{attrs:{href:"https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/#:~:text=Encoding%20is%20for%20maintaining%20data,order%20to%20return%20to%20plaintext.",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("encoded")]),a("OutboundLink")],1),t._v(", it is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is "),a("a",{attrs:{href:"https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/#:~:text=Encoding%20is%20for%20maintaining%20data,order%20to%20return%20to%20plaintext.",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("encrypted")]),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h5",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[t._v("The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.")]),t._v(" "),a("h3",{attrs:{id:"identiy-access-management-iam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identiy-access-management-iam"}},[t._v("#")]),t._v(" Identiy Access Management IAM")]),t._v(" "),a("p",[t._v("Auth0 makes it simple to exchange "),a("code",[t._v("JWT")]),t._v(" and allows managers to easily adjust user claims through its interface. Admins can also track and monitor how users move through their applications and expire sessions with suspecious activity.")])])}),[],!1,null,null,null);e.default=n.exports}}]);