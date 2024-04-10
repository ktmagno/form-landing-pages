$(document).ready(function () {
  $("#btn-signup").css("opacity", "0.5");

  //button disable, enable
  $("#cpassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#btn-signup").prop("disabled", false);
    } else {
      $("#btn-signup").prop("disabled", true);
    }
  });

  $("#ipassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#btn-signup").prop("disabled", false);
    } else {
      $("#btn-signup").prop("disabled", true);
    }
  });

  //button color
  $("#ipassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#btn-signup").css({ "background-color": "#05A3EA", opacity: "1" });
    } else $("#btn-signup").css("opacity", "0.5");
  });

  $("#cpassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#btn-signup").css("opacity", "1");
    } else $("#btn-signup").css("opacity", "0.5");
  });

  //message
  $("#ipassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#message").text("Passwords match!").css("color", "green");
      $("#btn-signup").css("opacity", "1");
    } else $("#message").text("Passwords do not match").css("color", "red");
  });

  $("#cpassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#message").text("Passwords match!").css("color", "green");
      $("#btn-signup").css("opacity", "1");
    } else $("#message").text("Passwords do not match").css("color", "red");
  });
});
