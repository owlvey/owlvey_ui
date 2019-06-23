import React, { useState } from "react";
import Page from "shared/Page";
import { MdPersonPin } from "react-icons/md";
import Avatar from "shared/Avatar";
import DotDropdown from "shared/DotDropdown";
import Autocomplete from "shared/Autocomplete";

function MembershipView({
  memberships,
  currentCustomer,
  currentUser,
  onSearchUser,
  addMember,
  removeMember
}) {
  const [userSelected, setUserSelected] = useState(null);
  const [textAutocomplete, setTextAutocomplete] = useState("");
  const handleSelectItem = user => {
    setUserSelected(user);
    setTextAutocomplete(user.username);
  };
  const handleClearItem = () => {
    setUserSelected(null);
  };

  const handleClickAddMember = () => {
    addMember(currentCustomer.customerId, userSelected);
    setUserSelected(null);
    setTextAutocomplete("");
  };

  return (
    <Page
      className="MembershipView position-relative"
      title="Membership"
      breadcrumbs={[{ name: "Membership", active: true }]}
    >
      <div className="card border-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr className="text-capitalize align-middle">
                <th>
                  <MdPersonPin size={25} />
                </th>
                <th colSpan="2">
                  <div className="form-inline">
                    <span>username</span>
                    <div className="form-group position-absolute">
                      <Autocomplete
                        onChangeInput={setTextAutocomplete}
                        inputValue={textAutocomplete}
                        onSearch={onSearchUser}
                        extraClassNames="form-control"
                        displayMember="username"
                        onSelectItem={handleSelectItem}
                        onClearItem={handleClearItem}
                        placeholder="Add new user as a member by email"
                      />
                      <button
                        className="ml-3 btn btn-primary"
                        disabled={!userSelected}
                        onClick={handleClickAddMember}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {memberships.map((item, index) => (
                <tr key={index}>
                  <td className="align-middle" style={{ width: "60px" }}>
                    <Avatar src={item.avatar} />
                  </td>
                  <td className="align-middle">
                    <span className="text-capitalize font-weight-bold">
                      {item.name}
                    </span>
                    <br />
                    <span>{item.username}</span>
                  </td>
                  <td className="align-middle text-right">
                    {currentUser.userId !== item.userId && (
                      <DotDropdown
                        items={[
                          {
                            text: "Remove from membership",
                            onClick: () => {
                              removeMember(
                                currentCustomer.customerId,
                                item.userId
                              );
                            }
                          }
                        ]}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Page>
  );
}

export default MembershipView;
