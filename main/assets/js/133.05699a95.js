(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{694:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"handling-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-upgrades"}},[e._v("#")]),e._v(" Handling upgrades")]),e._v(" "),a("p",[e._v("It is vital that high-value IBC clients can upgrade along with their underlying chains to avoid disruption to the IBC ecosystem. Thus, IBC client developers will want to implement upgrade functionality to enable clients to maintain connections and channels even across chain upgrades.")]),e._v(" "),a("h2",{attrs:{id:"implementing-verifyupgradeandupdatestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-verifyupgradeandupdatestate"}},[e._v("#")]),e._v(" Implementing "),a("code",[e._v("VerifyUpgradeAndUpdateState")])]),e._v(" "),a("p",[e._v("The IBC protocol allows client implementations to provide a path to upgrading clients given the upgraded "),a("code",[e._v("ClientState")]),e._v(", upgraded "),a("code",[e._v("ConsensusState")]),e._v(" and proofs for each. This path is provided in the "),a("code",[e._v("VerifyUpgradeAndUpdateState")]),e._v(" method:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTk9URTogcHJvb2YgaGVpZ2h0cyBhcmUgbm90IGluY2x1ZGVkIGFzIHVwZ3JhZGUgdG8gYSBuZXcgcmV2aXNpb24gaXMgZXhwZWN0ZWQgdG8gcGFzcyBvbmx5IG9uIHRoZSBsYXN0IGhlaWdodCBjb21taXR0ZWQgYnkgdGhlIGN1cnJlbnQgcmV2aXNpb24uIENsaWVudHMgYXJlIHJlc3BvbnNpYmxlIGZvciBlbnN1cmluZyB0aGF0IHRoZSBwbGFubmVkIGxhc3QgaGVpZ2h0IG9mIHRoZSBjdXJyZW50IHJldmlzaW9uIGlzIHNvbWVob3cgZW5jb2RlZCBpbiB0aGUgcHJvb2YgdmVyaWZpY2F0aW9uIHByb2Nlc3MuCi8vIFRoaXMgaXMgdG8gZW5zdXJlIHRoYXQgbm8gcHJlbWF0dXJlIHVwZ3JhZGVzIG9jY3VyLCBzaW5jZSB1cGdyYWRlIHBsYW5zIGNvbW1pdHRlZCB0byBieSB0aGUgY291bnRlcnBhcnR5IG1heSBiZSBjYW5jZWxsZWQgb3IgbW9kaWZpZWQgYmVmb3JlIHRoZSBsYXN0IHBsYW5uZWQgaGVpZ2h0LgovLyBJZiB0aGUgdXBncmFkZSBpcyB2ZXJpZmllZCwgdGhlIHVwZ3JhZGVkIGNsaWVudCBhbmQgY29uc2Vuc3VzIHN0YXRlcyBtdXN0IGJlIHNldCBpbiB0aGUgY2xpZW50IHN0b3JlLgpmdW5jIChjcyBDbGllbnRTdGF0ZSkgVmVyaWZ5VXBncmFkZUFuZFVwZGF0ZVN0YXRlKAogIGN0eCBzZGsuQ29udGV4dCwKICBjZGMgY29kZWMuQmluYXJ5Q29kZWMsCiAgc3RvcmUgc2RrLktWU3RvcmUsCiAgbmV3Q2xpZW50IENsaWVudFN0YXRlLAogIG5ld0NvbnNTdGF0ZSBDb25zZW5zdXNTdGF0ZSwKICBwcm9vZlVwZ3JhZGVDbGllbnQsCiAgcHJvb2ZVcGdyYWRlQ29uc1N0YXRlIFtdYnl0ZSwKKSBlcnJvcgo="}}),e._v(" "),a("blockquote",[a("p",[e._v("Please refer to the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/upgrade.go#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client implementation"),a("OutboundLink")],1),e._v(" as an example for implementation.")])]),e._v(" "),a("p",[e._v("It is important to note that light clients "),a("strong",[e._v("must")]),e._v(" handle all management of client and consensus states including the setting of updated "),a("code",[e._v("ClientState")]),e._v(" and "),a("code",[e._v("ConsensusState")]),e._v(" in the client store. This can include verifying that the submitted upgraded "),a("code",[e._v("ClientState")]),e._v(" is of a valid "),a("code",[e._v("ClientState")]),e._v(" type, that the height of the upgraded client is not greater than the height of the current client (in order to preserve BFT monotonic time), or that certain parameters which should not be changed have not been altered in the upgraded "),a("code",[e._v("ClientState")]),e._v(".")]),e._v(" "),a("p",[e._v("Developers must ensure that the "),a("code",[e._v("MsgUpgradeClient")]),e._v(" does not pass until the last height of the old chain has been committed, and after the chain upgrades, the "),a("code",[e._v("MsgUpgradeClient")]),e._v(" should pass once and only once on all counterparty clients.")]),e._v(" "),a("h3",{attrs:{id:"upgrade-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-path"}},[e._v("#")]),e._v(" Upgrade path")]),e._v(" "),a("p",[e._v("Clients should have "),a("strong",[e._v("prior knowledge of the merkle path")]),e._v(" that the upgraded client and upgraded consensus states will use. The height at which the upgrade has occurred should also be encoded in the proof.")]),e._v(" "),a("blockquote",[a("p",[e._v("The Tendermint client implementation accomplishes this by including an "),a("code",[e._v("UpgradePath")]),e._v(" in the "),a("code",[e._v("ClientState")]),e._v(" itself, which is used along with the upgrade height to construct the merkle path under which the client state and consensus state are committed.")])]),e._v(" "),a("h2",{attrs:{id:"chain-specific-vs-client-specific-client-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-specific-vs-client-specific-client-parameters"}},[e._v("#")]),e._v(" Chain specific vs client specific client parameters")]),e._v(" "),a("p",[e._v("Developers should maintain the distinction between client parameters that are uniform across every valid light client of a chain (chain-chosen parameters), and client parameters that are customizable by each individual client (client-chosen parameters); since this distinction is necessary to implement the "),a("code",[e._v("ZeroCustomFields")]),e._v(" method in the "),a("RouterLink",{attrs:{to:"/ibc/light-clients/client-state.html"}},[a("code",[e._v("ClientState")]),e._v(" interface")]),e._v(":")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVXRpbGl0eSBmdW5jdGlvbiB0aGF0IHplcm9lcyBvdXQgYW55IGNsaWVudCBjdXN0b21pemFibGUgZmllbGRzIGluIGNsaWVudCBzdGF0ZQovLyBMZWRnZXIgZW5mb3JjZWQgZmllbGRzIGFyZSBtYWludGFpbmVkIHdoaWxlIGFsbCBjdXN0b20gZmllbGRzIGFyZSB6ZXJvIHZhbHVlcwovLyBVc2VkIHRvIHZlcmlmeSB1cGdyYWRlcwpmdW5jIChjcyBDbGllbnRTdGF0ZSkgWmVyb0N1c3RvbUZpZWxkcygpIENsaWVudFN0YXRlCg=="}}),e._v(" "),a("p",[e._v("Developers must ensure that the new client adopts all of the new client parameters that must be uniform across every valid light client of a chain (chain-chosen parameters), while maintaining the client parameters that are customizable by each individual client (client-chosen parameters) from the previous version of the client. "),a("code",[e._v("ZeroCustomFields")]),e._v(" is a useful utility function to ensure only chain specific fields are updated during upgrades.")]),e._v(" "),a("h2",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("p",[e._v("Upgrades must adhere to the IBC Security Model. IBC does not rely on the assumption of honest relayers for correctness. Thus users should not have to rely on relayers to maintain client correctness and security (though honest relayers must exist to maintain relayer liveness). While relayers may choose any set of client parameters while creating a new "),a("code",[e._v("ClientState")]),e._v(", this still holds under the security model since users can always choose a relayer-created client that suits their security and correctness needs or create a client with their desired parameters if no such client exists.")]),e._v(" "),a("p",[e._v("However, when upgrading an existing client, one must keep in mind that there are already many users who depend on this client's particular parameters. "),a("strong",[e._v("We cannot give the upgrading relayer free choice over these parameters once they have already been chosen. This would violate the security model")]),e._v(" since users who rely on the client would have to rely on the upgrading relayer to maintain the same level of security.")]),e._v(" "),a("p",[e._v("Thus, developers must make sure that their upgrade mechanism allows clients to upgrade the chain-specified parameters whenever a chain upgrade changes these parameters (examples in the Tendermint client include "),a("code",[e._v("UnbondingPeriod")]),e._v(", "),a("code",[e._v("TrustingPeriod")]),e._v(", "),a("code",[e._v("ChainID")]),e._v(", "),a("code",[e._v("UpgradePath")]),e._v(", etc), while ensuring that the relayer submitting the "),a("code",[e._v("MsgUpgradeClient")]),e._v(" cannot alter the client-chosen parameters that the users are relying upon (examples in Tendermint client include "),a("code",[e._v("TrustLevel")]),e._v(", "),a("code",[e._v("MaxClockDrift")]),e._v(", etc). The previous paragraph discusses how "),a("code",[e._v("ZeroCustomFields")]),e._v(" helps achieve this.")]),e._v(" "),a("h3",{attrs:{id:"document-potential-client-parameter-conflicts-during-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-potential-client-parameter-conflicts-during-upgrades"}},[e._v("#")]),e._v(" Document potential client parameter conflicts during upgrades")]),e._v(" "),a("p",[e._v("Counterparty clients can upgrade securely by using all of the chain-chosen parameters from the chain-committed "),a("code",[e._v("UpgradedClient")]),e._v(" and preserving all of the old client-chosen parameters. This enables chains to securely upgrade without relying on an honest relayer, however it can in some cases lead to an invalid final "),a("code",[e._v("ClientState")]),e._v(" if the new chain-chosen parameters clash with the old client-chosen parameter. This can happen in the Tendermint client case if the upgrading chain lowers the "),a("code",[e._v("UnbondingPeriod")]),e._v(" (chain-chosen) to a duration below that of a counterparty client's "),a("code",[e._v("TrustingPeriod")]),e._v(" (client-chosen). Such cases should be clearly documented by developers, so that chains know which upgrades should be avoided to prevent this problem. The final upgraded client should also be validated in "),a("code",[e._v("VerifyUpgradeAndUpdateState")]),e._v(" before returning to ensure that the client does not upgrade to an invalid "),a("code",[e._v("ClientState")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);