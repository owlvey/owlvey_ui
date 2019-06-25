import React, { useState } from "react";
import Page from "shared/Page";
import { MdPersonPin } from "react-icons/md";
import DotDropdown from "shared/DotDropdown";
import classNames from "classnames";

function KeyView({ keys, addKey }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClickAddKey = () => {
    setIsSubmitting(true);
    addKey()
      .then(() => {
        setIsSubmitting(false);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  const classTable = classNames("table-responsive", {
    "submitting-form": isSubmitting
  });

  return (
    <Page
      className="KeyView position-relative"
      title="Keys"
      breadcrumbs={[{ name: "Keys", active: true }]}
    >
      <div className="card border-0">
        <div className={classTable}>
          <table className="table table-hover mb-0">
            <thead>
              <tr className="text-capitalize align-middle">
                <th>
                  <MdPersonPin size={25} />
                </th>
                <th>Key</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {keys.map((item, index) => (
                <tr key={index}>
                  <td className="align-middle" style={{ width: "60px" }}>
                    {index}
                  </td>
                  <td className="align-middle">
                    <span>{item.keyId}</span>
                  </td>
                  <td className="align-middle text-right">
                    <DotDropdown
                      items={[
                        {
                          text: "Remove Key",
                          onClick: () => {}
                        }
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button className="btn btn-primary" onClick={handleClickAddKey}>
              Add new key
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default KeyView;
