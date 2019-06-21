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
  removeMember,
}) {
  const tableHeaders = [<MdPersonPin size={25} />, "username", ""];
  const [userSelected, setUserSelected] = useState(null);
  const handleSelectItem = user => {
    setUserSelected(user);
  };
  const handleClearItem = () => {
    setUserSelected(null);
  };

  const handleClickAddMember = () => {
    addMember(currentCustomer.customerId, userSelected);
    setUserSelected(null);
  };

  return (
    <Page
      className="ProcessStepPage position-relative"
      title="Membership"
      breadcrumbs={[{ name: "Membership", active: true }]}
    >
      <div className="form-inline">
        <div className="form-group">
          <Autocomplete
            onSearch={onSearchUser}
            extraClassNames="form-control"
            displayMember="username"
            onSelectItem={handleSelectItem}
            onClearItem={handleClearItem}
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
      <div className="card border-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr className="text-capitalize align-middle">
                {tableHeaders.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
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
                                item.userId,
                              );
                            },
                          },
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
