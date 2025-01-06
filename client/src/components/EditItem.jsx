import React, {useState} from "react";

const EditItem = ({item}) => {
    const [description, setDescription] = useState(item.description);
    
    // update description function
    const updateDescription = async e => {
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch(
            `http://localhost:5000/items/${item.item_id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );

          window.location = "/";

        } catch (err) {
          console.error(err.message);
        }
      };

    return (
      <>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target={`#id${item.item_id}`}
        >
          Edit
        </button>

        <div className="modal" id={`id${item.item_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Item</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setDescription(item.description)}
                ></button>
              </div>

              <div className="modal-body">
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
              </div>

              <div className="modal-footer">
              <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={e => updateDescription(e)}
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setDescription(item.description)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
        
}

export default EditItem;