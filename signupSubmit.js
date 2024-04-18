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
      $("#pw-message").text("Passwords match!").css("color", "green");
    } else $("#pw-message").text("Passwords do not match").css("color", "red");
  });
});
