$(document).ready(function () {
  // $("#btn-signup").css("opacity", "0.5");

  //button disable and enable
  $("#cpassword, #ipassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#btn-signup").prop("disabled", false);
      $("#btn-signup").on("mouseover", () => {
        $("#btn-signup").css("background-color", "#05A3EA");
      });
    } else {
      $("#btn-signup").prop("disabled", true);
      $("#btn-signup").on("mouseover", () => {
        $("#btn-signup").css("background-color", "#08689F");
      });
    }
  });

  //password validation
  $("#ipassword, #cpassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#message").text("Passwords match").css("color", "green");
    } else $("#message").text("Passwords do not match").css("color", "red");
  });

  //email validation
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validate = () => {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
      $result.text(email + " is valid.");
      $result.css("color", "green");
    } else {
      $result.text(email + " is invalid.");
      $result.css("color", "red");
    }
    return false;
  };

  $("#email").on("input", validate);
});
